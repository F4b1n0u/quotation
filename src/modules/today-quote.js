import moment from 'moment'

import { AlertIOS } from 'react-native' 

export const KEY = 'today-quote'
export const NAME_SPACE = 'TODAY-QUOTE'

import {
  getQuote,
  getTodayQuote,
} from '#services/local-file'

import {
  IS_DEMO_MODE,
} from '../../env'

// State
const initialState = {}

// Actions
export const SET = `${NAME_SPACE}/SET`

// Reducers
export default function isIntroducedReducer(
  state = initialState,
  {
    type,
    payload,
  }
) {
  switch (type) {
    case SET:
      return payload
    default:
      return state
  }
}

// Action Creators
export const set = quote => ({
  type: SET,
  payload: quote,
})

const promptQuote = async ({ alreadyTried }) => new Promise(resolve => {
  const format = 'DDMMYYYY'
  const text = `set date ${format} format`

  AlertIOS.prompt(
    alreadyTried
      ? `no quote found !, try again\n${text}`
      : text,
    null,
    date => {
      const promptedDate = moment(date, format)
        .startOf('day')
        .unix()

      resolve(promptedDate)
    }
  )
})

// Side effects
export const retrieve = () => async dispatch => {
  let todayQuote
  
  if (IS_DEMO_MODE) {
    let alreadyTried = false

    while (!finalTodayQuote) {
      const todayQuoteDate = await promptQuote({ alreadyTried })
      todayQuote = await getQuote(todayQuoteDate)
      alreadyTried = true
    }
  } else {
    todayQuote = await getTodayQuote()
  }

  dispatch(set(todayQuote))
}

// Selectors
export const get = state => state[KEY]