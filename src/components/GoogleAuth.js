import React from "react";
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id: '1030740676040-ndivqt4plajk6krman92vqr1lfvn6vs5.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })  
    });
  }

  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return null;
    } else if(this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button small">
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui blue google button small">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }
  
  //// Call when every auth status changed
  onAuthChange = (isSignedIn) => {
    // this.setState({isSignedIn : this.auth.isSignedIn.get()})
    if(isSignedIn)
      this.props.signIn(this.auth.currentUser.get().getId());
    else
      this.props.signOut();
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  render() {
    return(
      <div>{this.renderAuthButton()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {
  signIn,
  signOut
})(GoogleAuth);