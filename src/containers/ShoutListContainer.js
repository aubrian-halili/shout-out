import { connect } from 'react-redux';
import ShoutList from '../components/ShoutList';

const mapStateToProps = (state) => {
  return {
    shouts: [{
      id: 1,
      text: 'This is a post related to first.',
      date: '22/01/2017',
      user: 'Aubrian Halili',
    }, {
      id: 2,
      text: 'This is a post related to second.',
      date: '23/01/2017',
      name: 'Joseph Imari',
    }],
  };
};

const ShoutListContainer = connect(
  mapStateToProps,
)(ShoutList);

export default ShoutListContainer;
