import _ from '../../util/_';
import User from '../../models/User';
import { success, badRequest, error } from '../../util/response';

const remove = (req, res) => {
  const id = req.params.userId;
  User.findByIdAndRemove(id, (err, user) => {
    if (err) {
      error(res, 'Something went wrong');
    } else if (_.isNull(user)) {
      badRequest(res, 'Unable to process the request');
    } else {
      success(res, user);
    }
  });
};

export default remove;
