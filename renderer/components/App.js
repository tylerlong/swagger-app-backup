import React from 'react'
import { Layout, Menu, Button } from 'antd'
const { Header, Content, Footer } = Layout

import Info from './info'

class App extends React.Component {
  render () {
    if (this.props.spec == null) {
      return (
        <div style={{ padding: '32px' }}>
          <div style={{ background: '#ECECEC', padding: '32px', textAlign: 'center', minHeight: '128px' }} >
            <Button size='large' style={{ margin: '0 16px' }} icon='folder-open'>Open</Button>
            <Button size='large' style={{ margin: '0 16px' }} icon='addfile' onClick={() => this.props.newSpec()}>Create</Button>
          </div>
        </div>
      )
    } else {
      return (
        <Layout className='layout'>
          <Header>
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
              <Menu.Item key='1'>Info</Menu.Item>
              <Menu.Item key='2'>Permissions</Menu.Item>
              <Menu.Item key='3'>Parameters</Menu.Item>
              <Menu.Item key='4'>Paths</Menu.Item>
              <Menu.Item key='5'>Models</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Info info={this.props.spec.info} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            RingCentral ©2017 Created by Tyler Long
          </Footer>
        </Layout>
      )
    }
  }
}

export default App
