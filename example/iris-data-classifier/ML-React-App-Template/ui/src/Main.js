import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Screens/Home';
import Login from './Screens/Login';
import MriViewer from './Screens/MriViewer';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/mriViewer' component={MriViewer}></Route>
    </Switch>
  );
}

export default Main;