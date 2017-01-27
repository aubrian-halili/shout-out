import _ from '../../util/_';
import User from '../../models/User';
import { success, badRequest, error } from '../../util/response';

const save = (req, res) => {
  const userId = req.params.userId;
  const name = req.body.name;
  const username = req.body.username;
  const following = [];
  if (req.body.following) {
    following.push(req.body.following);
  }

  User.findOne({ _id: userId }, (err, user) => {
    if (err) {
      error(res, 'User does not exist');
    } else {
      User.findByIdAndUpdate(userId, {
        name: _.isEmpty(name) ? user.name : name,
        username: _.isEmpty(username) ? user.username : username,
        following: _.isEmpty(following) ? user.following : following,
      }, (errUpdate, updatedUser) => {
        if (errUpdate) {
          error(res, 'Something went wrong');
        } else if (_.isNull(updatedUser)) {
          badRequest(res, 'Unable to process the request');
        } else {
          success(res, updatedUser);
        }
      });
    }
  });
};

export default save;
