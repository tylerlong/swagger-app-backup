import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd'

ReactDOM.render(
  <div>
    <h1>I am running Node.js {process.versions.node}, Electron {process.versions.electron} and Chrome {process.versions.chrome}.</h1>
    <DatePicker />
  </div>,
  document.getElementById('root')
)
