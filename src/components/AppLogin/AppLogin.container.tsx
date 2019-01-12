import React, { Component } from 'react'
import AppLoginWidget from './AppLogin.component'

interface LoginState {
  loggedIn: boolean;
}

class AppLogin extends Component<any, LoginState> {
    constructor(props: any) {
      super(props);
        this.state = {
          loggedIn: true
        }
    };
    render() {
        return (
          <div>
            <div id="fb-root"></div>
            <AppLoginWidget />
          </div>
        )
    };
  };

  export default AppLogin;