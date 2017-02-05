import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Link } from 'react-router'

const { Header, Content, Footer } = Layout

class App extends React.Component {
  render () {
    const menuItems = [<Menu.Item key='home'><Link to='/'>Home</Link></Menu.Item>]
    if (this.props.spec !== null) {
      menuItems.push(<Menu.Item key='metadata'><Link to='/metadata'>Metadata</Link></Menu.Item>)
      menuItems.push(<Menu.Item key='permissions'><Link to='/permissions'>Permissions</Link></Menu.Item>)
      menuItems.push(<Menu.Item key='parameters'>Parameters</Menu.Item>)
      menuItems.push(<Menu.Item key='paths'>Paths</Menu.Item>)
      menuItems.push(<Menu.Item key='models'>Models</Menu.Item>)
    }
    return (
      <Layout className='layout' style={{ height: '100vh' }}>
        <Header>
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['metadata']} style={{ lineHeight: '64px' }}>
            {menuItems}
          </Menu>
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Metadata</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: '24px', minHeight: '256px' }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          RingCentral ©2017 Created by <a href='https://github.com/tylerlong'>Tyler Long</a>
        </Footer>
      </Layout>
    )
  }
}

export default App
