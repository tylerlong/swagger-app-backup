import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker, message } from 'antd'

ReactDOM.render(
  <div>
    <p>I am running Node.js {process.versions.node}, Electron {process.versions.electron} and Chrome {process.versions.chrome}.</p>
    <DatePicker onChange={value => message.success(value.toISOString())} />
  </div>,
  document.getElementById('root')
)
