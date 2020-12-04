import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {showAddMessage, hideMessage} from '../reducers/notificationReducer'

import {setTiming, getTiming} from './Timing'

const AnecdoteForm = () =>
{
  const dispatch = useDispatch()

  function add(message)
  {
    dispatch(createAnecdote(message))
    dispatch(showAddMessage(message))

    clearTimeout(getTiming())
    setTiming(setTimeout(() =>
    {
      dispatch(hideMessage())
    }, 5000))
  }

  const addAnecdote = (event) =>
  {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    add(content)
  }

  return (
    <div>
    <h2>Create New</h2>
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">create</button>
    </form>
    </div>
  )
} 

export default AnecdoteForm