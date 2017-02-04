import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import { Provider } from 'react-redux'

import store from './store'
import router from './router'

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      {router}
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
)
