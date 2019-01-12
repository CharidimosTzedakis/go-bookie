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
        //* load fb sdk 
        const script = document.createElement("script");
        script.id = 'facebook-jssdk';
        script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=242707682960835&autoLogAppEvents=1';
        script.async = true;
        document.body.appendChild(script);
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