import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './pages/App'
import Home from './pages/Home/index'
import { CookiesProvider } from 'react-cookie'

function Routes() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/playlists" component={App} />
        </Switch>
      </CookiesProvider>
    </BrowserRouter>
  )
}

export default Routes
