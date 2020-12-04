const initialState = ''

const FilterReducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case 'FILTER':
      return action.filter
    default:
      return state
  }
}

export const filter = (filterText) =>
{
  return {
    type: 'FILTER',
    filter: filterText
  }
}

export default FilterReducer