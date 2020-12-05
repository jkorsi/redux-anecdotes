import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import AnecdoteReducer, { initializeAnecdotes} from './reducers/anecdoteReducer'
import NotificationReducer from './reducers/notificationReducer'
import FilterReducer from './reducers/filterReducer'

import anecdoteService from './services/anecdotes'

const reducer = combineReducers({
  anecdotes: AnecdoteReducer,
  notification: NotificationReducer,
  filter: FilterReducer
})

const store = createStore(reducer, composeWithDevTools())

// anecdoteService.getAll().then(anecdotes =>
//   store.dispatch(initializeAnecdotes(anecdotes))
// )

export default store