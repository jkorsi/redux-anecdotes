const initialState = 'Welcome to Anecdotes'

const NotificationReducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case 'ADD_NOTIFICATION':
      return `Added '${action.data}'`
    case 'VOTE_NOTIFICATION':
      return `Voted '${action.data}'`
    case 'HIDE':
      return ''
    default: return state
  }
}

export const showAddMessage = (message) =>
{
  return {
    type: 'ADD_NOTIFICATION',
    data:  message
  }
}

export const showVoteMessage = (message) =>
{
  return {
    type: 'VOTE_NOTIFICATION',
    data: message
  }
}

export const hideMessage = () =>
{
  return {
    type: 'HIDE'
  }
}

export default NotificationReducer