import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Screens/Home';
import Login from './Screens/Login';
import MRIViewer from './Screens/MRIViewer';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/mriViewer' component={MRIViewer}></Route>
    </Switch>
  );
}

export default Main;