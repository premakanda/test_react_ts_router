import * as React from 'react'

import { Link, RouteComponentProps, Router } from '@reach/router'

import { Authenticated } from './components/сommon/Authenticated'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { News } from './pages/News'
import { Profile } from './pages/Profile'
import { Rev } from './pages/Rev'

import { checkAuthStatus, logout } from './api/auth'

import './App.css'

const App: React.FC<RouteComponentProps> = props => {
  return (
    <div className="container">
      <h1>TZ #1 with hooks & TypeScript</h1>
      <nav>
        <Link to="/">Домой</Link> 
        <Link to="news">Новости</Link>{' '}
        <Link to="/profile">Профиль</Link>{' '}
        <Link to="/react">react</Link>{' '}
        {checkAuthStatus() ? <button onClick={logout}>Выйти</button> : null}
      </nav>

      {props.children}
    </div>
  )
}

const RoutedApp = () => {
  return (
    <Router>
      <App path="/">
        <Home path="/" />
        <Login path="/login" />
        <News path="/news" />
        <Rev path="/react" />
        <Authenticated path="/profile">
          <Profile path="/" />
        </Authenticated>
      </App>
    </Router>
  )
}

export { RoutedApp }
