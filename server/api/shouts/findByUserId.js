import Shout from '../../models/Shout';
import { success, error } from '../../util/response';

const find = (req, res) => {
  const ids = req.query.userIds;
  Shout.find({ user_id: { $in: ids } }).exec((err, shouts) => {
    if (err) {
      error(res, 'Something went wrong');
    } else {
      success(res, shouts);
    }
  });
};

export default find;
