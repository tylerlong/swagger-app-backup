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
    case 'NEW_SPEC':
      return {
        info: {
          version: 'Version of the API',
          title: 'Title of the API',
          description: 'Description of the API',
          terms_of_service: 'Url to Terms of Service page',
          host: 'Host of the API server',
          base_path: '/',
          schemes: 'https',
          produces: 'application/json',
          consumes: 'application/json'
        },
        permissions: [],
        parameters: [],
        paths: [],
        models: []
      }
    default:
      return spec
  }
}

const combinedReducers = combineReducers({
  file,
  spec
})

export default combinedReducers
