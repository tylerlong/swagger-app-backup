import React from 'react'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout

class App extends React.Component {
  render () {
    return (
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
            <Menu.Item key='1'>nav 1</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          RingCentral ©2017 Created by Tyler Long
        </Footer>
      </Layout>
    )
  }
}

export default App
