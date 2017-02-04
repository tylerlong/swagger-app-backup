import { combineReducers } from 'redux'

const file = (file = null, action) => {
  switch (action.type) {
    case 'SET_FILE':
      return action.file
    default:
      return file
  }
}

const spec = (spec = null, action) => {
  switch (action.type) {
    case 'SET_SPEC':
      return action.spec
    default:
      return spec
  }
}

const combinedReducers = combineReducers({
  file,
  spec
})

export default combinedReducers
