import { combineReducers } from 'redux'
export const KEY = 'app'
export const NAME_SPACE = 'APP'

// State
const initialState = {
  isLoaded: false,
  status: {
    isPending: true,
    error: null,
  }
}

// Actions
export const START_LOAD = `${NAME_SPACE}/START_LOAD`
export const END_LOAD_SUCCESS = `${NAME_SPACE}/END_LOAD_SUCCESS`
export const END_LOAD_FAILURE = `${NAME_SPACE}/END_LOAD_FAILURE`

// Reducers
function isLoadedReducer(
  state = initialState.isLoaded,
  {
    type,
  }
) {
  
  switch (type) {
    case END_LOAD_SUCCESS:
      return true
    case END_LOAD_FAILURE:
      return false
    default:
      return state
  }
}

function statusReducer(
  state = initialState.status,
  {
    type,
    payload,
  }
) {
  switch (type) {
    case START_LOAD:
      return {
        isPending: true,
        error: null,
      }
    case END_LOAD_SUCCESS:
      return {
        isPending: false,
        error: null,
      }
    case END_LOAD_FAILURE:
      return {
        isPending: false,
        error: payload.error,
      }
    default:
      return state
  }
}

export default combineReducers({
  isLoaded: isLoadedReducer,
  status: statusReducer,
})

// Action Creators
export const startLoad = () => ({
  type: START_LOAD,
})
export const endLoad = () => ({
  type: END_LOAD_SUCCESS,
})
export const endLoadFailure = () => ({
  type: END_LOAD_FAILURE,
})

// Side effects

// Selectors
export const isLoading = state => state[KEY].status.isPending
export const isLoaded = state => state[KEY].isLoaded