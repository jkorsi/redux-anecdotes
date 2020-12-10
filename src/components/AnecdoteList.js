import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'

const AnecdoteList = () =>
{
    const dispatch = useDispatch()
    //const anecdotes = useSelector(state => state.anecdotes)
    const anecdotes = useSelector(({filter, anecdotes}) =>
    {
        if(filter === ''){
            return anecdotes
        }       
        return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    })

    anecdotes.sort(compareNumbers)

    function compareNumbers(a, b)
    {
        //Sort descending
        return b.votes - a.votes
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => dispatch(addVote(anecdote.id))}
                />
            )}
        </div>
    )
}

export default AnecdoteList