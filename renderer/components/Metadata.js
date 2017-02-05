import React from 'react'
import { Table } from 'antd'
import _ from 'lodash'

class Metadata extends React.Component {
  render () {
    const columns = ['Name', 'Value'].map(item => ({
      title: item,
      dataIndex: _.camelCase(item),
      key: _.camelCase(item)
    }))

    const dataSource = ['Version', 'Title', 'Description', 'Terms of Service', 'Host', 'Base Path', 'Schemes', 'Produces', 'Consumes'].map(item => ({
      key: _.camelCase(item),
      name: item,
      value: this.props.metadata[_.camelCase(item)]
    }))

    return (
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    )
  }
}

export default Metadata
