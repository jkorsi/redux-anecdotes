import React from 'react'
import {connect} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {showAndHideMessage} from '../reducers/notificationReducer'

const AnecdoteForm = (props) =>
{
  async function add(contentToAdd)
  {   
    props.createAnecdote(contentToAdd)
    props.showAndHideMessage(`Added: ${contentToAdd}`, 2)
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

const mapDispatchToProps = {
  createAnecdote,
  showAndHideMessage
}

const ConnectedAnecdotes = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdotes