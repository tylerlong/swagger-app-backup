import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import { Provider, connect } from 'react-redux'

import _App from './components/App'
import store from './store'
import { newSpec } from './actions'

const App = connect((state) => {
  return { spec: state.spec }
}, { newSpec })(_App)

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
)
