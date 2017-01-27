import _ from '../../util/_';
import Shout from '../../models/Shout';
import { success, error } from '../../util/response';

const find = (req, res) => {
  const userId = [];
  if (req.query.userId) {
    userId.push(req.query.userId);
  }
  Shout.find({ user: { $in: userId } }).populate('user').exec((err, shouts) => {
    if (err) {
      error(res, 'Something went wrong');
    } else {
      const formatted = _.map(shouts, (shout) => {
        return {
          id: shout.id,
          text: shout.text,
          createdAt: shout.created_at,
          updatedAt: shout.updated_at,
          user: shout.user.name,
        };
      });
      success(res, formatted);
    }
  });
};

export default find;
