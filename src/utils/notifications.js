import moment from 'moment'
import { Notifications, Permissions } from 'expo'

import {
  getNotificationId, 
  saveNotificationId,
} from '#services/local-storage'

export const manage = async () => {
  let {
    permissions: {
      notifications: notificationPermissions,
    }
  } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  const willShow = Object
    .values(notificationPermissions)
    .some(notification => notification)
  
  let notificationId = await getNotificationId()

  if (willShow) {
    if (notificationId) {
      // to avoid the today notification
      await Notifications.cancelScheduledNotificationAsync(notificationId)
    }

    notificationId = await Notifications.scheduleLocalNotificationAsync(
      {
        title: 'a new quote is awaiting',
        body: 'Open Quotation what quote we have for you today!',
      },
      {
        time: moment()
          .startOf('day')
          .hour(7)
          // starts tomorrow
          .add(1, 'days')
          .valueOf(),
        repeat: 'day',
      },
    )
    await saveNotificationId(notificationId)
  }
}
