import moment from 'moment'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions';
import { isEmpty } from 'lodash'

import {
  getNotificationIds, 
  saveNotificationIds,
} from '#services/local-storage'

import {
  getQuote,
} from '#services/firebase'

import {
  QUOTE_TEASER_DURATION,
  NOTIFICATION_HOUR_24,
} from '../../env'

export const manage = async () => {
  let {
    permissions: {
      notifications: notificationPermissions,
    }
  } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  const willShowNotifications = Object
    .values(notificationPermissions)
    .some(notification => notification)
  
  let notificationIds = await getNotificationIds()
  
  if (willShowNotifications) {
    if (!isEmpty(notificationIds)) {
      // to avoid the today notification
      await Notifications.cancelAllScheduledNotificationsAsync()
    }

    const today = moment()
      .startOf('day')
      .add(1, 'days')

    notificationIds = await [...Array(QUOTE_TEASER_DURATION).keys()]
      .reduce(
        async (acc, dayNumber) => {
          let notificationIds = await acc
          
          const date = today
            .clone()
            .add(dayNumber, 'days')
          const id = date.unix()
          const time = date.hour(NOTIFICATION_HOUR_24).valueOf()

          const quote = await getQuote(id)

          if (quote) {
            const notificationId = await Notifications.scheduleLocalNotificationAsync(
              {
                title: `${quote.author} want to tell you something`,
                // TODO do not let that been done automatically
                body: `${quote.date} - ${quote.details}`,
              },
              {
                time,
              },
            )

            notificationIds.push(notificationId)
          }
          return notificationIds
        },
        Promise.resolve([])
      )

    await saveNotificationIds(notificationIds)
  }
}
