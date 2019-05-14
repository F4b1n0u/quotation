import moment from 'moment'
import { Notifications, Permissions } from 'expo'
import { isEmpty } from 'lodash'

import {
  getNotificationIds, 
  saveNotificationIds,
} from '#services/local-storage'

import {
  getQuote,
} from '#services/firebase'

const NOTIFICATION_DURATION = 30

export const manage = async () => {
  let {
    permissions: {
      notifications: notificationPermissions,
    }
  } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

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

    notificationIds = await [...Array(NOTIFICATION_DURATION).keys()]
      .reduce(
        async (acc, dayNumber) => {
          let notificationIds = await acc
          
          const date = today
            .clone()
            .add(dayNumber, 'days')
          const id = date.unix()
          const time = date.hour(7).valueOf()

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
