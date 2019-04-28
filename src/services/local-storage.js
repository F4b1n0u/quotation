import { AsyncStorage } from "react-native"

const KEYS = {
  isIntroduced: '@quotation:is-introduced',
  lastQuote: '@quotation:is-last-quote',
  notificationId: '@quotation:notification-id',
}

const VALUES = {
  isIntroduced: 'true',
  lastQuote: '{}',
  notificationId: '',
}

const get = fieldName => AsyncStorage.getItem(KEYS[fieldName])
const set = async (fieldName, fieldValue) => AsyncStorage.setItem(KEYS[fieldName], fieldValue)

export const checkIntroduction = get.bind(this, 'isIntroduced')
export const saveIntroduction = set.bind(this, 'isIntroduced', VALUES.isIntroduced)

export const getLastQuote = () => AsyncStorage
  .getItem(KEYS.lastQuote)
  .then(lastQuote => JSON.parse(lastQuote || VALUES['lastQuote']))

export const saveLastQuote = quote => AsyncStorage.setItem(KEYS.lastQuote, JSON.stringify(quote))

export const getNotificationId = get.bind(this, 'notificationId')
export const saveNotificationId = set.bind(this, 'notificationId')
