import React from 'react'

const Andecdote = (anecdote, handleClick) =>
{
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      <li onClick={handleClick}>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>Votes</button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default Andecdote