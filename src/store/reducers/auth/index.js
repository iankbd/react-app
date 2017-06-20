'use strict'

import * as core from './core';

const {
  AUTH_FIELD_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} = require('../../actionTypes').default;

const initialState = new core.InitialState();

export default function (state = initialState, {type, payload}) {

  switch (type) {

    case AUTH_FIELD_CHANGE:
      return state.setIn(['registrationForm', payload.field], payload.value);
    case LOGIN_SUCCESS:
      return state.set('isLoggedIn', true).set('errorMsg', false);
    case LOGIN_FAIL:
      return initialState.set('errorMsg', true);
    case LOGOUT:
      return initialState;



    default:
      return state;
  };

  return state;
}
