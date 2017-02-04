import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
)
