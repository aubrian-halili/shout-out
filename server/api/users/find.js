import User from '../../models/User';
import { success, error } from '../../util/response';

const find = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      error(res, 'Something went wrong');
    } else {
      success(res, users);
    }
  });
};

export default find;
