'use strict'

const {
  AUTH_FIELD_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
  // LOGIN_REQUEST,
  // REGISTER_REQUEST,
  // TOKEN_LOGIN_REQUEST,
  // LOGOUT_REQUEST,
  //
  // VERIFY_INPUT_FIELD,
  // VERIFY_REGISTRATION_FORM,
  // VERIFY_ALL_FIELDS

} = require('../actionTypes').default;

export const authFieldChange = (field, value) => ({type: AUTH_FIELD_CHANGE, payload: {field, value}});
export const loginSuccess = () => ({type: LOGIN_SUCCESS, payload: null});
export const loginFail = () => ({type: LOGIN_FAIL, payload: null});
export const logout = () => ({type: LOGOUT, payload: null});
