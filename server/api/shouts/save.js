import Shout from '../../models/Shout';
import { success, error } from '../../util/response';

const save = (req, res) => {
  const shout = new Shout({
    text: req.body.text,
    user_id: req.body.userId,
  });

  shout.save((err, newShout) => {
    if (err) {
      error(res, 'Something went wrong');
    } else {
      success(res, newShout);
    }
  });
};

export default save;
