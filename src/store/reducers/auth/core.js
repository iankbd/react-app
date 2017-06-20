import {Record} from 'immutable';
import {
  RegistrationForm,
} from './model';


export const InitialState = new Record({
  registrationForm: RegistrationForm(),
  // accountDetails: AccountDetails(),
  // validator: Validator(),
  isLoggedIn: false,
  errorMsg: false
  // attemptedTokenLogin: false,
  // accessLevel: null,
  // hasSubmittedRegistrationForm: false
});
