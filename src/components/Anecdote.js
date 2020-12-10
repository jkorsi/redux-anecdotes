import React from 'react'
import {useDispatch} from 'react-redux'
import {showAndHideMessage} from '../reducers/notificationReducer'

const Anecdote = ({anecdote, handleClick}) =>
{
  const dispatch = useDispatch()

  function vote(votedContent, clickHandler)
  {
    dispatch(showAndHideMessage(`Voted: ${votedContent}`, 2))
    clickHandler()
  }

  const style = {
    padding: 5
  }

  return (
    <div style={style}>
        <div key={anecdote.id}>
        <div>
          <li style={{padding: 2}}>
            <strong>{anecdote.content}</strong>
          </li>
          </div>
          <div>
            has {anecdote.votes} votes
            <button onClick={event =>vote(anecdote.content, handleClick)}>Vote</button>
          </div>
        </div>
    </div>
  )
}

export default Anecdote