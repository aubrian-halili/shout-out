import User from '../../models/User';
import { success, error } from '../../util/response';

const save = (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const following = req.body.following;
  const user = new User({
    name,
    username,
    password,
    following,
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
