import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '#modules'

export default function configureStore(initialState) {
  const middlewares = [thunk]
  const enhancer = compose(
    applyMiddleware(...middlewares)
  )

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  return store
}
