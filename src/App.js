import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { logout } from './reducers/auth';

import AuthRoute from './AuthRoute';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Login from './components/Login';
import LogoutButton from './components/LogoutButton';

const App = () => {

  const user = useSelector(state => state.auth.userInfo);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(user !== null);
    console.log('render');
  }, [user, authenticated])

  return (
    <>
    { authenticated ? 'A' : 'B' }
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        { authenticated ? (
          <LogoutButton logout={logout} />
        ): (
          <Link to="login">
            <button>login</button>
          </Link>
        )}
      </header>
      <hr />
      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} { ...props } />}
          />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </>
  )
}

export default App;