import React, { Component } from 'react'

interface AppState {
    loggedIn: boolean;
  }

class DashBoard extends Component <any, AppState> {
    constructor(props: any){
        super(props);
        this.state = {
        loggedIn: true
        };
    }
    render () {
        return(
            <div>
                This is the dashboard!
            </div>
        );
    }
}


export default DashBoard;
