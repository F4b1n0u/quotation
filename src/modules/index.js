import { combineReducers } from 'redux'

import appReducer, {
  KEY as APP_KEY,
} from '#modules/app'

import userReducer, {
  KEY as USER_KEY,
} from '#modules/user'

import todayQuoteReducer, {
  KEY as TODAY_QUOTE_KEY,
} from '#modules/today-quote'

// Reducers
export default combineReducers({
  [APP_KEY]: appReducer,
  [USER_KEY]: userReducer,
  [TODAY_QUOTE_KEY]: todayQuoteReducer,
})
