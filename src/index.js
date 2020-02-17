import React from 'react'
import { hydrate, render } from 'react-dom'
import App from './App'
import 'react-app-polyfill/ie11'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker'
import './assets/css/reset.css'
import './assets/css/main.css'
import './assets/css/layout.css'
import './assets/css/functions.css'
import './assets/css/color.css'

const rootElement = document.querySelector('#root')

const store = createStore(rootReducer)

if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
} else {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
