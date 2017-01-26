import React from 'react';

const Component = ({ onShoutChange, shout, submitShout, isFormatValid, shoutState }) => (
  <div className="container">
    <form>
      <div className={shoutState.isError ? 'form-group has-danger' : 'form-group'}>
        <textarea className="form-control" id="shout" rows="3" maxLength="32" placeholder="What's on your mind? Must be 1-32 characters long." defaultValue={shout} onChange={onShoutChange} onBlur={onShoutChange} />
        <small className="form-control-feedback">{shoutState.message}</small>
      </div>
      <button type="button" className="btn btn-primary" onClick={submitShout} disabled={!isFormatValid}>Post Shout</button>
    </form>
  </div>
);

export default Component;
