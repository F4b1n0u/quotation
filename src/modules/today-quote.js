import moment from 'moment'

import { AlertIOS } from 'react-native' 

export const KEY = 'today-quote'
export const NAME_SPACE = 'TODAY-QUOTE'

import {
  getLastQuote,
} from '#services/local-storage'

import {
  getQuote,
  getTodayQuote,
} from '#services/firebase'

import {
  getRandom as getRandomFallbackQuote,
} from '#utils/quotes'

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
  const lastQuote = await getLastQuote()
  const today = moment().startOf('day')
  let todayQuoteDate = today.format('YYYY-MM-DD')
  let finalTodayQuote = null

  if (IS_DEMO_MODE) {
    let alreadyTried = false

    while (!finalTodayQuote) {
      todayQuoteDate = await promptQuote({ alreadyTried })
      finalTodayQuote = await getQuote(todayQuoteDate)
      alreadyTried = true
    }
  } else {
    // the last display quote was today's
    if (lastQuote.date === todayQuoteDate) {
      finalTodayQuote = lastQuote
    } else {
      const todayQuote = await getTodayQuote()

      if (todayQuote) {
        finalTodayQuote = todayQuote
      } else {
        finalTodayQuote = getRandomFallbackQuote()
      }
    }
  }

  dispatch(set(finalTodayQuote))
}

// Selectors
export const get = state => state[KEY]