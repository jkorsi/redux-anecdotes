import React from 'react'
import {connect} from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'

const AnecdoteList = (props) =>
{
    props.anecdotes.sort(compareNumbers)

    function compareNumbers(a, b)
    {
        //Sort descending
        return b.votes - a.votes
    }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => props.addVote(anecdote.id)}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) =>
{
    if (state.filter === '')
    {
        return {anecdotes: state.anecdotes}
    }
    return {
        anecdotes: state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    }
}

const mapDispatchToProps = {
    addVote
}

const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes