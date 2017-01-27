import _ from 'lodash';
import moment from './moment';

_.timeTodayDateElse = (date) => {
  return moment(date).calendar();
};

export default _;
