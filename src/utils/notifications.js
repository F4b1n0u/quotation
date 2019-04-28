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

  if (!notificationId && willShow) {
    notificationId = await Notifications.scheduleLocalNotificationAsync(
      {
        title: 'test',
        body: 'test',
      },
      {
        time: moment().startOf('day').hour(7).valueOf(),
        repeat: 'minute',
      },
    )
    await saveNotificationId(notificationId)
  }
}