import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    <h1>I am running Node.js {process.versions.node}, Electron {process.versions.electron} and Chrome {process.versions.chrome}.</h1>
  </div>,
  document.getElementById('root')
)
