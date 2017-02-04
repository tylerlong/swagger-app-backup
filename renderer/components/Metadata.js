import React from 'react'
import { Table } from 'antd'

class Metadata extends React.Component {
  render () {
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
      value: this.props.metadata.version
    }, {
      key: '2',
      name: 'Title',
      value: this.props.metadata.title
    }, {
      key: '3',
      name: 'Description',
      value: this.props.metadata.description
    }]

    return (
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </div>
    )
  }
}

export default Metadata
