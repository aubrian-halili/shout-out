import _ from '../../util/_';
import Shout from '../../models/Shout';
import { success, badRequest, error } from '../../util/response';

const save = (req, res) => {
  const shout = new Shout({
    text: req.body.text,
    user_id: req.user.id,
  });

  shout.save((err, newShout) => {
    if (err) {
      error(res, 'Something went wrong');
    } else if (_.isNull(newShout)) {
      badRequest(res, 'Unable to process the request');
    } else {
      success(res, newShout);
    }
  });
};

export default save;
