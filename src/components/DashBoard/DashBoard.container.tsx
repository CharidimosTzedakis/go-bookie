import React, { Component } from 'react'
import styled from 'styled-components'
import { string } from 'prop-types';

interface DashBoardProps {
    className?: string,
}

interface DashBoardState {
    loggedIn: boolean;
}

class DashBoardComponent extends Component <DashBoardProps, DashBoardState> {
    constructor(props: DashBoardProps){
        super(props);
        this.state = {
        loggedIn: true
        };
    }
    render () {
        return(
            <div className={this.props.className}>
                <div className="nav">
                    <div>My Books</div>
                    <div>Reading Now</div>
                    <div>Browse</div>
                    <div>News</div>
                    <div >Settings</div>
                    <div className="logoutBtn">Logout</div>
                </div>
                <div className="content">
                    <div className="title">This is the dashboard!</div>
                </div>
            </div>
        );
    }
}

const DashBoard = styled(DashBoardComponent)/*css*/`
    .nav {
        float: left;
        width: 20%;
        max-width: 30vh;
        background-color: #4e4949;
        display: flex;
        flex-direction: column;
        color: white;
        text-align: center;
        min-height: 100vh;
    }
    .content {
        align-items: center;
        justify-content: center;
        float: left;
        width: 80%;
        min-height: 100vh;
    }
    .logoutBtn {
        margin-top: auto;
        margin-bottom: 10px;
    }
    .title {
        text-align: center;
        font-size: 25px;
        font-weight: 500;
    }
`;

export default DashBoard;
