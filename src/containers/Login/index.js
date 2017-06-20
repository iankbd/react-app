'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Component from './Login_Container';

import {authFieldChange, loginSuccess, loginFail, logout } from '../../store/actions/auth';

function mapStateToProps (state) {
  return {
    user: state.getIn(['auth', 'registrationForm']).toJS(),
    isLoggedIn: state.get('auth').toJS().isLoggedIn,
    errorMsg: state.get('auth').toJS().errorMsg
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    authFieldChange,
    loginSuccess,
    loginFail,
    logout
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
