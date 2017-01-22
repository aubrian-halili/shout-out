import Shout from '../../models/Shout';
import { success, error } from '../../util/response';

const find = (req, res) => {
  Shout.find({}, (err, shouts) => {
    if (err) {
      error(res, 'Something went wrong');
    } else {
      success(res, shouts);
    }
  });
};

export default find;
