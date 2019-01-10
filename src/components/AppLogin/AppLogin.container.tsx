import React, { Component } from 'react'
import AppLoginComponent from './AppLogin.component' 


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
          <AppLoginComponent />
        )
    };
  };

  export default AppLogin;