import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

import App from './App'
import './sass/index.scss'

import ContextProviders from './contexts/ContextProviders'

const AppWithRouter = withRouter(App)

ReactDOM.render(
  <Router>
    <ContextProviders>
      <AppWithRouter />
    </ContextProviders>
  </Router>,
  document.getElementById('root')
)
