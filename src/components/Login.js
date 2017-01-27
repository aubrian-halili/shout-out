import React from 'react';

class Component extends React.Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const usernameState = this.props.usernameState;
    const passwordState = this.props.passwordState;
    const authState = this.props.authState;

    return (
      <div className="container">
        <form className="form-signin">
          {authState.isError &&
            <div className="alert alert-danger" role="alert">
              <strong>Oh snap!</strong> {authState.message}
            </div>
          }
          <h2 className="form-signin-heading">Please login:</h2>
          <div className={usernameState.isError ? 'form-group has-danger' : 'form-group'}>
            <label htmlFor="username" className="sr-only">Email address</label>
            <input type="text" id="username" className="form-control" placeholder="Username" required="" autoFocus="" onChange={this.props.onUsernameChange} onBlur={this.props.onUsernameChange} />
            <small className="form-control-feedback">{usernameState.message}</small>
          </div>

          <div className={passwordState.isError ? 'form-group has-danger' : 'form-group'}>
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Password" required="" autoFocus="" onChange={this.props.onPasswordChange} onBlur={this.props.onPasswordChange} />
            <small className="form-control-feedback">{passwordState.message}</small>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.props.login} disabled={!this.props.isFormatValid}>Sign in</button>
        </form>
      </div>
    );
  }
}

export default Component;
