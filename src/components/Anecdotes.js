import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import Andecdote from './Andecdote'

const Anecdotes = () =>
{
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <Andecdote
                    id={anecdote.id}
                    votes={anecdote.votes}
                    content={anecdote.content}
                    handleClick={() => dispatch(addVote(anecdote.id))}
                />
            )}
            <h2>create new</h2>
            <form>
                <div><input /></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default Anecdotes