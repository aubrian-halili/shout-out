import User from '../../models/User';
import { success, error } from '../../util/response';

const save = (req, res) => {
  const user = new User({
    name: req.body.name,
  });

  user.save((err, newUser) => {
    if (err) {
      error(res, 'Something went wrong');
    } else {
      success(res, newUser);
    }
  });
};

export default save;
