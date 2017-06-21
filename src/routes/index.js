"use strict";

import React from 'react';
import {Router, Route, IndexRoute, Redirect, IndexRedirect} from 'react-router';

import AppHome from './scenes/AppHome';
import Docs from './scenes/Docs';
import Tutorial from './scenes/Tutorial';
import Login from './scenes/Login';
module.exports = (
  <Route path="/">
    <IndexRoute component={AppHome}/>
    <Route path='docs' component={Docs}/>
    <Route path='tutorial' component={Tutorial}/>
    <Route path='login' component={Login}/>
    {/* <Redirect from="*" to="error"/> */}
	</Route>
);
