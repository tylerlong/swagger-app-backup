import React from 'react'
import { Route, Router, hashHistory, IndexRoute } from 'react-router'
import { connect } from 'react-redux'

import _App from './components/App'
import _Home from './components/Home'
import _Metadata from './components/Metadata'
import Permissions from './components/Permissions'

import { newSpec } from './actions'

const App = connect(state => ({ spec: state.spec }))(_App)
const Home = connect(null, { newSpec })(_Home)
const Metadata = connect(state => ({ metadata: state.spec.metadata }))(_Metadata)

const router = (
  <Router history={hashHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='/metadata' component={Metadata} />
      <Route path='/permissions' component={Permissions} />
    </Route>
  </Router>
)

export default router
