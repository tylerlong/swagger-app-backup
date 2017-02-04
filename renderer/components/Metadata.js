import React from 'react'
import { Table } from 'antd'

class Metadata extends React.Component {
  render () {
    const columns = [];
    ['Name', 'Value'].forEach((item) => {
      columns.push({
        title: item,
        dataIndex: item.toLowerCase(),
        key: item.toLowerCase()
      })
    })

    const dataSource = [];
    ['Version', 'Title', 'Description'].forEach((item) => {
      dataSource.push({
        key: item.toLowerCase(),
        name: item,
        value: this.props.metadata[item.toLowerCase()]
      })
    })

    return (
      <div style={{ background: '#fff', padding: '24px', minHeight: '256px' }}>
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </div>
    )
  }
}

export default Metadata
