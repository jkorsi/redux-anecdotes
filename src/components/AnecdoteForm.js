import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {showAndHideMessage} from '../reducers/notificationReducer'

const AnecdoteForm = () =>
{
  const dispatch = useDispatch()

  async function add(contentToAdd)
  {   
    dispatch(createAnecdote(contentToAdd))
    dispatch(showAndHideMessage(`Added: ${contentToAdd}`, 2))
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