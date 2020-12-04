import React from 'react'

import {useDispatch} from 'react-redux'
import {showVoteMessage, hideMessage} from '../reducers/notificationReducer'

import { setTiming, getTiming } from './Timing'

const Anecdote = ({anecdote, handleClick}) =>
{
  const dispatch = useDispatch()

  function vote(message, clickHandler)
  {
    dispatch(showVoteMessage(message))

    clearTimeout(getTiming())
    setTiming(setTimeout(() =>
    {
      dispatch(hideMessage())
    }, 5000)) 
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