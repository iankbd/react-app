import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import App from './components/App';
import styles from './style/style.css';


// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(Counter),
//     document.getElementById('mount')
//   );
//
// });

ReactDOM.render(
    <App />,
    document.getElementById('mount')
);
