import { connect } from 'react-redux';

import _ from '../util/_';
import Component from '../components/ShoutForm';
import { setShout, validate, isFormatValid, submitShout } from '../actions/shout-action';

const getShoutState = (state) => {
  const { shout: { form: { error } } } = state;
  const isError = !_.isEmpty(error) || false;
  return {
    isError,
    message: error,
  };
};

const mapStateToProps = (state) => {
  const { shout: { form } } = state;
  return {
    shoutState: getShoutState(state),
    shout: form.data.text,
    isFormatValid: form.isFormatValid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShoutChange: (event) => {
      dispatch(setShout({ text: event.target.value }));
      dispatch(validate());
      dispatch(isFormatValid());
    },
    submitShout: () => {
      dispatch(submitShout());
    },
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
