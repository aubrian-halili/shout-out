import _ from 'lodash';
import moment from 'moment';

_.timeTodayDateElse = (date) => {
  moment.lang('en', {
    calendar: {
      lastDay: 'D MMMM',
      sameDay: 'h:mmA',
      nextDay: 'D MMMM',
      lastWeek: 'D MMMM',
      nextWeek: 'D MMMM',
      sameElse: 'D MMMM',
    },
  });
  return moment(date).calendar();
};

export default _;
