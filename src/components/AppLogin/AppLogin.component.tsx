import React, { SFC } from 'react'
import styled from 'styled-components'

interface Props {
 className?: string,
 performLogin: () => void,
}

const AppLoginComponent: SFC<Props> = (props) => {
    return (
        <div className={props.className}>
            Please login to go-bookie:
            <span>Username:<input/></span>
            <span id="password">Password:<input type="password"/></span>
        <div className="loginButtons">
            <button className="loginBtn bookieLogin" onClick={props.performLogin}>
                Login
            </button>
            <button className="loginBtn loginBtn--facebook">
                Login with Facebook
            </button>
            <button className="loginBtn loginBtn--google">
                Login with Google
            </button>
        </div>
        </div>
    );
}


const AppLoginWidget = styled(AppLoginComponent)/*css*/`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    margin-top: 20px;
    width: 350px;
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

    .loginBtn {
        display: block;
        float: right;
        width: 207px;
        box-sizing: border-box;
        position: relative;
        /* width: 13em;  - apply for fixed size */
        margin: 0.2em;
        padding: 0 15px 0 46px;
        border: none;
        text-align: left;
        line-height: 34px;
        white-space: nowrap;
        border-radius: 0.2em;
        font-size: 16px;
        color: #FFF;
      }
      .loginBtn:before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 34px;
        height: 100%;
      }
      .loginBtn:focus {
        outline: none;
      }
      .loginBtn:active {
        box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
      }
      
      /* Facebook */
      .loginBtn--facebook {
        background-color: #4C69BA;
        background-image: linear-gradient(#4C69BA, #3B55A0);
        /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
        text-shadow: 0 -1px 0 #354C8C;
      }
      .loginBtn--facebook:before {
        border-right: #364e92 1px solid;
        background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
      }
      .loginBtn--facebook:hover,
      .loginBtn--facebook:focus {
        background-color: #5B7BD5;
        background-image: linear-gradient(#5B7BD5, #4864B1);
      }
      
      /* Google */
      .loginBtn--google {
        /*font-family: "Roboto", Roboto, arial, sans-serif;*/
        background: #DD4B39;
      }
      .loginBtn--google:before {
        border-right: #BB3F30 1px solid;
        background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
      }
      .loginBtn--google:hover,
      .loginBtn--google:focus {
        background: #E74B37;
      }
      .bookieLogin {
        background-color: #F91659;
      }

      .loginButtons {
          margin-top: 30px;
          margin-right: 5px;
      }
`;

export default AppLoginWidget;