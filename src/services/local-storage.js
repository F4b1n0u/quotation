import { AsyncStorage } from "react-native"
import moment from 'moment'

import {
  LOCAL_STATE_VERSION,
  LOCAL_STATE_UPGRADE_STRATEGY,
} from '../../env'

const STATE_KEY = '@quotation:local-state-json'
const STATE_DEFAULT = {
  version: moment().unix(), // 14 May 2019
  isIntroduced: false,
  lastQuote: {},
  notificationIds: [],
}

const sanitize = async () => {
  const currentLocalStateVersion = await get('version')

  const needUpgrade = LOCAL_STATE_VERSION > currentLocalStateVersion
  
  if (needUpgrade) {
    switch(LOCAL_STATE_UPGRADE_STRATEGY) {
      case 'CLEAR':
        await AsyncStorage.clear()
        await AsyncStorage.setItem(STATE_KEY, JSON.stringify(STATE_DEFAULT))
    }
  }
}

const getAllState = () => AsyncStorage
  .getItem(STATE_KEY)
  .then(json => JSON.parse(json))

const get = async (fieldName) => {
  const localStorage = await getAllState()
  return (localStorage || STATE_DEFAULT)[fieldName]
}

const set = async (fieldName, fieldValue) => {
  let localStorage = await getAllState()
  
  localStorage = {
    ...STATE_DEFAULT,
    ...localStorage,
    [fieldName]: fieldValue,
  }

  return AsyncStorage.setItem(STATE_KEY, JSON.stringify(localStorage))
}

export const checkIntroduction = get.bind(this, 'isIntroduced')
export const saveIntroduction = set.bind(this, 'isIntroduced', true)

export const getLastQuote = get.bind(this, 'lastQuote')
export const saveLastQuote = set.bind(this, 'lastQuote')

export const getNotificationIds = get.bind(this, 'notificationIds')
export const saveNotificationIds = set.bind(this, 'notificationIds')

sanitize()