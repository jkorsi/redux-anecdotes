import anecdoteService from '../services/anecdotes'

const AnecdoteReducer = (state = [], action) =>
{
  switch (action.type)
  {
    case 'VOTE':
      const votedAnecdote = action.data
      const id = action.data.id

      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : votedAnecdote
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }
}

export const addVote = (id) =>
{

  return async dispatch =>
  {    
    const votedAnecdote = await anecdoteService.updateVotes(id)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote})
  }
}

export const createAnecdote = data =>
{
  return async dispatch =>
  {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () =>
{
  return async dispatch =>
  {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default AnecdoteReducer