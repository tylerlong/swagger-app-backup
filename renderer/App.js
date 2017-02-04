import React from 'react'
import { Layout, Menu, Button, Table } from 'antd'
const { Header, Content, Footer } = Layout

class App extends React.Component {
  render () {
    if (this.props.spec == null) {
      return (
        <div style={{ background: '#ECECEC', padding: '32px', margin: '32px', textAlign: 'center', minHeight: '128px' }} >
          <Button type='primary' size='large' style={{ marginRight: '32px' }} icon='folder-open'>Open</Button>
          <Button size='large' icon='addfile' onClick={() => this.props.newSpec()}>Create</Button>
        </div>
      )
    } else {
      const { info } = this.props.spec
      const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: 'Value',
        dataIndex: 'value',
        key: 'value'
      }]
      const dataSource = [{
        key: '1',
        name: 'Version',
        value: info.version
      }, {
        key: '2',
        name: 'Title',
        value: info.title
      }, {
        key: '3',
        name: 'Description',
        value: info.description
      }]
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
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Table columns={columns} dataSource={dataSource} pagination={false} />
            </div>
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
