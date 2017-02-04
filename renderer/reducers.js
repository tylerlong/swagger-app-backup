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
        metadata: {
          version: '1.0',
          title: 'Example API',
          description: 'Restful API for Example',
          termsOfService: 'https://www.example.com/terms-of-service',
          host: 'api.example.com',
          basePath: '/',
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
