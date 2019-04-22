import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from '#modules'

export default function configureStore(initialState) {
  const middlewares = [thunk]
  const enhancer = composeWithDevTools({})(
    applyMiddleware(...middlewares)
  )

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  return store
}
