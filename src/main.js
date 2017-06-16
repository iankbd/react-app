import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter/component';
import Nav_bar from './components/navbar/component';
//import styles from './style/navbar.css';


// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(Counter),
//     document.getElementById('mount')
//   );
//
// });

ReactDOM.render(
    <Nav_bar />,
    document.getElementById('mount')
);
