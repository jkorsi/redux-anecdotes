import React from 'react'
import {useDispatch} from 'react-redux'
import { filter } from '../reducers/filterReducer'

const Filter = () =>
{
  const dispatch = useDispatch()

  function doFiltering(filterValue)
  {
    dispatch(filter(filterValue))
  }

  const handleChange = (event) =>
  {
    const filterValue = event.target.value
    doFiltering(filterValue)    
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter