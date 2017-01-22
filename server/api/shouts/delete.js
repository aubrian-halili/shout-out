import _ from '../../util/_';
import Shout from '../../models/Shout';
import { success, badRequest, error } from '../../util/response';

const remove = (req, res) => {
  const id = req.params.shoutId;
  Shout.findByIdAndRemove(id, (err, shout) => {
    if (err) {
      error(res, 'Something went wrong');
    } else if (_.isNull(shout)) {
      badRequest(res, 'Unable to process the request');
    } else {
      success(res, shout);
    }
  });
};

export default remove;
