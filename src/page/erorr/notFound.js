import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
import Button from '../../components/Button'

function NotFound(props) {
  const handleBack = () => {
    props.history.push('/')
  }
  return (
    <>
      <Helmet title="Erorr page" />
      <Layout className="App-header">
        <div className="form bg-white">
          <h1>Not found page</h1>
          <Button type="primary" onClick={handleBack}>
            Back Index
          </Button>
        </div>
      </Layout>
    </>
  )
}

export default NotFound
