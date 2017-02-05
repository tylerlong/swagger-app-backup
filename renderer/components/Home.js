import React from 'react'
import { Button } from 'antd'

class Home extends React.Component {
  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <Button size='large' style={{ margin: '0 16px' }} icon='folder-open'>Open</Button>
        <Button size='large' style={{ margin: '0 16px' }} icon='file-add' onClick={() => this.props.newSpec()}>Create</Button>
      </div>
    )
  }
}

export default Home
