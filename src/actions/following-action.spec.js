/* eslint no-undef: "off"*/
import * as actions from './following-action';

describe('Following Actions', () => {
  describe('setFollowing', () => {
    it('should create an action to set following', () => {
      const users = {};
      const expectedAction = {
        type: 'SET_FOLLOWING',
        users,
      };
      expect(actions.setFollowing(users)).toEqual(expectedAction);
    });
  });
});
