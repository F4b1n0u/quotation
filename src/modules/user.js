import { combineReducers } from 'redux'
export const KEY = 'user'
export const NAME_SPACE = 'USER'

import {
  checkIntroduction,
  saveIntroduction,
} from '#services/local-storage'

// State
const initialState = {
  isIntroduced: false,
}

// Actions
export const INTRODUCE = `${NAME_SPACE}/SET_IS_INTRODUCED`

// Reducers
function isIntroducedReducer(
  state = initialState.isIntroduced,
  {
    type,
  }
) {
  switch (type) {
    case INTRODUCE:
      return true
    default:
      return state
  }
}

export default combineReducers({
  isIntroduced: isIntroducedReducer,
})

// Action Creators
export const introduce = () => ({
  type: INTRODUCE,
})

// Side effects
export const finishIntroduction = () => async dispatch => {
  await saveIntroduction()
  await dispatch(introduce())
}

export const verifyIntroduction = () => async dispatch => {
  const isIntroduced = await checkIntroduction()
  if (isIntroduced) {
    dispatch(introduce())
  }
}

// Selectors
export const isIntroduced = state => state[KEY].isIntroduced