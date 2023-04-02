import React from 'react'
import { Layout } from 'antd'
import LocalizationExample from './localization'
import BasicUsageExample from './basic-usage'

const { Content } = Layout

function App() {
  return (
    <Layout style={{ height: '100vh', backgroundColor: 'white' }}>
      <Content style={{ margin: '0 16px' }}>
        <h1>Period Selector Demo</h1>
        <BasicUsageExample />
        <br />
        <LocalizationExample />
        <br />
      </Content>
    </Layout>
  )
}

export default App
