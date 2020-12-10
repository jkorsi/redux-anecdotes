import {setTiming, getTiming} from '../Timing'

const initialState = 'Welcome to Anecdotes'

const NotificationReducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case 'SHOW_NOTIFICATION':
      return action.data
    case 'HIDE':
      return ''
    default: return state
  }
}

export const showMessage = (message) =>
{
  return {
    type: 'SHOW_NOTIFICATION',
    data:  message
  }
}

export const showAndHideMessage = (message, timer) =>
{
  return async dispatch =>
  {
    clearTimeout(getTiming())
    dispatch({
      type: 'SHOW_NOTIFICATION',
      data: message
    })
    setTiming(setTimeout(() => 
    {
        dispatch({
          type: 'HIDE'
        })
      }, timer*1000))
  }
}

export const hideMessage = () =>
{
  return {
    type: 'HIDE'
  }
}

export default NotificationReducer