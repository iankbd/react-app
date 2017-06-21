import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import App from './components/App';
import styles from './style/style.css';
import {Provider} from 'react-redux';
// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(Counter),
//     document.getElementById('mount')
//   );
//
// });
import AppHome from './routes/scenes/AppHome';
import Docs from './routes/scenes/Docs';
import Tutorial from './routes/scenes/Tutorial';
import {Router, Route, IndexRoute, Redirect, IndexRedirect, browserHistory} from 'react-router';

import routes from './routes';

import configureStore from './store';
const store = configureStore();
store.subscribe(() => {
     console.log("store changed", store.getState().getIn(['auth']).toJS()) //showing state in console when store changed
 })

ReactDOM.render(
    <Provider store={store}>
      <Router routes={routes} history={browserHistory}/>
    </Provider>,
    // <Router history={browserHistory}>
    //   <Route path='/' component={AppHome}/>
    //   <Route path='/docs' component={Docs}/>
    //   <Route path='/tutorial' component={Tutorial}/>
    // </Router>,
    document.getElementById('mount')
);
