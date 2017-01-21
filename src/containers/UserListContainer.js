import { connect } from 'react-redux';
import UserList from '../components/UserList';

const mapStateToProps = (state) => {
  return {
    users: [{
      id: 1,
      name: 'Aubrian Halili',
    }, {
      id: 2,
      name: 'Joseph Imari',
    }],
  };
};

const UserListContainer = connect(
  mapStateToProps,
)(UserList);

export default UserListContainer;
