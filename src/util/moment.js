import moment from 'moment';

moment.updateLocale('en', {
  calendar: {
    lastDay: 'D MMMM',
    sameDay: 'h:mmA',
    nextDay: 'D MMMM',
    lastWeek: 'D MMMM',
    nextWeek: 'D MMMM',
    sameElse: 'D MMMM',
  },
});

export default moment;
