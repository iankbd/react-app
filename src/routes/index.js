"use strict";

import React from 'react';
import {Router, Route, IndexRoute, Redirect, IndexRedirect} from 'react-router';

import AppHome from './scenes/AppHome';
import Docs from './scenes/Docs';
import Tutorial from './scenes/Tutorial';

module.exports = (
  <Route path="/">
    <IndexRoute component={AppHome}/>
    <Route path='docs' component={Docs}/>
    <Route path='tutorial' component={Tutorial}/>
    {/* <Redirect from="*" to="error"/> */}
	</Route>
);
