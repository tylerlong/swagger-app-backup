import React from 'react'
import { Route, Router, hashHistory } from 'react-router'
import { connect } from 'react-redux'

import _App from './components/App'
import { newSpec } from './actions'

const App = connect((state) => {
  return { spec: state.spec }
}, { newSpec })(_App)

const router = (
  <Router history={hashHistory} >
    <Route path='/' component={App} />
  </Router>
)

export default router
