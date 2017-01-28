/* eslint no-undef: "off"*/
import * as actions from './login-action';

describe('Login Actions', () => {
  describe('setUsername', () => {
    it('should create an action to set username', () => {
      const username = 'shelby';
      const expectedAction = {
        type: 'SET_USERNAME',
        username,
      };
      expect(actions.setUsername(username)).toEqual(expectedAction);
    });
  });

  describe('setPassword', () => {
    it('should create an action to set password', () => {
      const password = 'shelby';
      const expectedAction = {
        type: 'SET_PASSWORD',
        password,
      };
      expect(actions.setPassword(password)).toEqual(expectedAction);
    });
  });

  describe('setUser', () => {
    it('should create an action to set user', () => {
      const user = {};
      const expectedAction = {
        type: 'SET_USER',
        user,
      };
      expect(actions.setUser(user)).toEqual(expectedAction);
    });
  });

  describe('setUsernameError', () => {
    it('should create an action to set username error', () => {
      const error = '';
      const expectedAction = {
        type: 'SET_USERNAME_ERROR',
        error,
      };
      expect(actions.setUsernameError(error)).toEqual(expectedAction);
    });
  });

  describe('setPasswordError', () => {
    it('should create an action to set password error', () => {
      const error = '';
      const expectedAction = {
        type: 'SET_PASSWORD_ERROR',
        error,
      };
      expect(actions.setPasswordError(error)).toEqual(expectedAction);
    });
  });

  describe('setAuthError', () => {
    it('should create an action to set auth error', () => {
      const error = '';
      const expectedAction = {
        type: 'SET_AUTH_ERROR',
        error,
      };
      expect(actions.setAuthError(error)).toEqual(expectedAction);
    });
  });

  describe('setFormatValid', () => {
    it('should create an action to set form validation', () => {
      const isValid = true;
      const expectedAction = {
        type: 'SET_CREDENTIAL_FORMAT_VALID',
        isValid,
      };
      expect(actions.setFormatValid(isValid)).toEqual(expectedAction);
    });
  });
});
