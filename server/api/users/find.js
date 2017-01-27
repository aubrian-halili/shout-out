import _ from '../../util/_';
import User from '../../models/User';
import { success, error } from '../../util/response';

const find = (req, res) => {
  const ids = [];
  if (req.query.id) {
    ids.push(req.query.id);
  }
  User.find({ _id: { $in: ids } }, (err, users) => {
    if (err) {
      error(res, 'Something went wrong');
    } else {
      const formatted = _.map(users, (user) => {
        return {
          id: user.id,
          name: user.name,
        };
      });
      success(res, formatted);
    }
  });
};

export default find;
