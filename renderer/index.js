import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker, message, LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <div>
      <p>
        I am running Node.js
        {process.versions.node}, Electron
        {process.versions.electron} and Chrome
        {process.versions.chrome}.
      </p>
      <DatePicker onChange={value => message.success(value.toISOString())} />
    </div>
  </LocaleProvider>,
  document.getElementById('root')
)
