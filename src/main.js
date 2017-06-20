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
import configureStore from './store';
const store = configureStore();
store.subscribe(() => {
    console.log("store changed", store.getState().getIn(['auth']).toJS()) //showing state in console when store changed
})

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('mount')
);
