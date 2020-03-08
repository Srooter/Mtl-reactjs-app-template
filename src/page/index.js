import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import Layout from '../components/Layout'
import './index.css'

function App() {
  return (
    <>
      <Helmet title="React Template" />
      <Layout className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="App-link" to="/login">
          Login
        </Link>
      </Layout>
    </>
  )
}

export default React.memo(App)
