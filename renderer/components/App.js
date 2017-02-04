import React from 'react'
import { Layout, Menu, Button, Breadcrumb } from 'antd'
import { Link } from 'react-router'

import Metadata from './metadata'

const { Header, Content, Footer } = Layout

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
              <Menu.Item key='1'><Link to='/'>Metadata</Link></Menu.Item>
              <Menu.Item key='2'><Link to='/permissions'>Permissions</Link></Menu.Item>
              <Menu.Item key='3'>Parameters</Menu.Item>
              <Menu.Item key='4'>Paths</Menu.Item>
              <Menu.Item key='5'>Models</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 48px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>Metadata</Breadcrumb.Item>
            </Breadcrumb>
            <Metadata metadata={this.props.spec.metadata} />
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
