import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import AnecdoteReducer from './reducers/anecdoteReducer'
import NotificationReducer from './reducers/notificationReducer'
import FilterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: AnecdoteReducer,
  notification: NotificationReducer,
  filter: FilterReducer
})

const Store = createStore(reducer, composeWithDevTools())

export default Store