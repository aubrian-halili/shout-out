import _ from '../../util/_';
import Shout from '../../models/Shout';
import { success, error } from '../../util/response';

const find = (req, res) => {
  const currentUserId = req.user.id;
  let userId = [];
  if (req.query.userId) {
    userId.push(req.query.userId);
  } else {
    userId = userId.concat(req.query.userId);
  }
  Shout.find({ user: { $in: userId } }).populate('user').sort({ updated_at: -1 }).exec((err, shouts) => {
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
          isEditable: currentUserId === shout.user.id || false,
        };
      });
      success(res, formatted);
    }
  });
};

export default find;
