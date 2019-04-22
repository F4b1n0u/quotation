import moment from 'moment'

export const KEY = 'today-quote'
export const NAME_SPACE = 'TODAY-QUOTE'

import {
  getLastQuote,
} from '#services/local-storage'

import {
  getTodayQuote
} from '#services/firebase'

import {
  getRandom as getRandomFallbackQuote,
} from '#utils/quotes'

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

// Side effects
export const retrieve = () => async dispatch => {
  const lastQuote = await getLastQuote()
  const today = moment().startOf('day')
  const todayQuoteDate = today.format('YYYY-MM-DD')
  let finalTodayQuote = null

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

  dispatch(set(finalTodayQuote))
}

// Selectors
export const get = state => state[KEY]