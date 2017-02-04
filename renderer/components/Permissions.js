import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Link } from 'react-router'

const { Header, Content, Footer } = Layout

class Permissions extends React.Component {
  render () {
    return (
      <Layout className='layout'>
        <Header>
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['permissions']} style={{ lineHeight: '64px' }}>
            <Menu.Item key='metadata'><Link to='/'>Metadata</Link></Menu.Item>
            <Menu.Item key='permissions'><Link to='/permissions'>Permissions</Link></Menu.Item>
            <Menu.Item key='parameters'>Parameters</Menu.Item>
            <Menu.Item key='paths'>Paths</Menu.Item>
            <Menu.Item key='models'>Models</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Permissions</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: '24px', minHeight: '256px' }}>
            <h1>Permissions</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          RingCentral ©2017 Created by Tyler Long
        </Footer>
      </Layout>
    )
  }
}

export default Permissions
