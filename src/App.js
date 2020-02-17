import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import { requireAuthentication } from './components/HOC/Auth'
import Loading from './components/Loading'
import Layout from './components/Layout'

const fallbackComponent = (
  <Layout className="App-header">
    <Loading type="big" />
  </Layout>
)

const index = loadable(() => import('./page/index'), { fallback: fallbackComponent })
const login = loadable(() => import('./page/login'), { fallback: fallbackComponent })
const main = loadable(() => import('./page/main'), { fallback: fallbackComponent })
const notFound = loadable(() => import('./page/erorr/notFound'), { fallback: fallbackComponent })

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/login" component={login} />
        <Route exact path="/main" component={requireAuthentication(main)} />
        <Route component={notFound} />
      </Switch>
    </Router>
  )
}

export default App
