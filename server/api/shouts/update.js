import _ from '../../util/_';
import Shout from '../../models/Shout';
import { success, badRequest, error } from '../../util/response';

const update = (req, res) => {
  const id = req.params.shoutId;
  const currentDate = new Date();

  const values = {
    text: req.body.text,
    updated_at: currentDate,
  };
  Shout.findByIdAndUpdate(id, values, (err, shout) => {
    if (err) {
      error(res, 'Something went wrong');
    } else if (_.isNull(shout)) {
      badRequest(res, 'Unable to process the request');
    } else {
      success(res, shout);
    }
  });
};

export default update;
