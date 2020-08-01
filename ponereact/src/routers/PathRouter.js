import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRouter from './AppRouter';
import PageUser from '../components/user/pageUser';
import Login from '../components/common/login';
import Register from '../components/common/register';
import MainUser from '../components/user/mainUser';
// import PageAdmin from '../components/admin/pageAdmin';
// import MainAdmin from '../components/admin/mainAdmin';

export default class componentName extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AppRouter
            path='/'
            layout={PageUser}
            exact
            component={MainUser}
          >
          </AppRouter>
          {/* <AppRouter
            path='/admin'
            layout={PageAdmin}
            exact
            component={MainAdmin}
          ></AppRouter> */}
          <AppRouter
            path='/login'
            layout={PageUser}
            exact
            component={Login}
          >
          </AppRouter>
          <AppRouter
            path='/register'
            layout={PageUser}
            exact
            component={Register}
          >
          </AppRouter>
        </Switch>
      </Router>
    );
  }
}
