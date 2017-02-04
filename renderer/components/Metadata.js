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
      key: 'version',
      name: 'Version',
      value: this.props.metadata.version
    }, {
      key: 'title',
      name: 'Title',
      value: this.props.metadata.title
    }, {
      key: 'description',
      name: 'Description',
      value: this.props.metadata.description
    }]

    return (
      <div style={{ background: '#fff', padding: '24px', minHeight: '256px' }}>
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </div>
    )
  }
}

export default Metadata
