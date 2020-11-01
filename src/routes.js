import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './pages/App'
import Home from './pages/Home/index'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/playlists" component={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
