import React from 'react'
import { Helmet } from 'react-helmet'
import { createForm } from 'rc-form'
import { connect } from 'react-redux'
import Layout from '../components/Layout'

function Main(props) {
  return (
    <>
      <Helmet title="Main page" />
      <Layout className="App-header">
        <div className="form bg-white">This is main page</div>
      </Layout>
    </>
  )
}
const mapStateToProps = state => {
  return { param: state.loginRds }
}

export default connect(mapStateToProps)(createForm()(Main))
