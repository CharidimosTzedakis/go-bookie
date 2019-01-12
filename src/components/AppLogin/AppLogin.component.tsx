import React, { SFC } from 'react'
import styled from 'styled-components'

interface Props {
 className?: string,
}

const AppLoginComponent: SFC<Props> = (props) => {
    return (
        <div className={props.className}>
            <span>Username:<input/></span>
            <span id="password">Password:<input type="password"/></span>
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" 
                data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false">
            </div>
        </div>
    );
}


const AppLoginWidget = styled(AppLoginComponent)/*css*/`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    margin-top: 20px;
    span {
        display: block;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
    }
    input {
        background: transparent;
        border: 0;
        padding: 0;
        margin: 0;
        font: 13px sans-serif;
        border-bottom: 2px solid #F91659;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        color: white;
        text-align: center;
        margin-left: 40px;
        margin-top: 10px;
    }
    input:focus {
        outline: none;
    }
    span#password {
        padding-left: 7px;
    }
    button {
        margin-top: 40px;
    }
`;

export default AppLoginWidget;