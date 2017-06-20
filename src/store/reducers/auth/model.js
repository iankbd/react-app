import {Record} from 'immutable';

export const RegistrationForm = new Record({
  email: '',
  password: '',
  default_email: 'user@kbdgroup.ca',
  default_password: 'password'
});
