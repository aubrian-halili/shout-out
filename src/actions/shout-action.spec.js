/* eslint no-undef: "off"*/
import * as actions from './shout-action';

describe('Shout Actions', () => {
  describe('setShout', () => {
    it('should create an action to set shout', () => {
      const shout = {};
      const expectedAction = {
        type: 'SET_SHOUT',
        shout,
      };
      expect(actions.setShout(shout)).toEqual(expectedAction);
    });
  });

  describe('deleteShout', () => {
    it('should create an action to delete shout', () => {
      const id = {};
      const expectedAction = {
        type: 'DELETE_SHOUT',
        id,
      };
      expect(actions.deleteShout(id)).toEqual(expectedAction);
    });
  });

  describe('setShoutList', () => {
    it('should create an action to set shout list', () => {
      const shouts = {};
      const expectedAction = {
        type: 'SET_SHOUT_LIST',
        shouts,
      };
      expect(actions.setShoutList(shouts)).toEqual(expectedAction);
    });
  });

  describe('setFormatValid', () => {
    it('should create an action to set format valid', () => {
      const isValid = {};
      const expectedAction = {
        type: 'SET_SHOUT_FORMAT_VALID',
        isValid,
      };
      expect(actions.setFormatValid(isValid)).toEqual(expectedAction);
    });
  });

  describe('setShoutError', () => {
    it('should create an action to set shout error', () => {
      const error = {};
      const expectedAction = {
        type: 'SET_SHOUT_ERROR',
        error,
      };
      expect(actions.setShoutError(error)).toEqual(expectedAction);
    });
  });
});
