import React, { SFC } from 'react'

//* use this to define a property type
/*interface WelcomeProps {
 name: string,
}
const Welcome: React.SFC<WelcomeProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
} */

const AppLoginComponent: SFC = (props: any) => {
    return (
        <div id="login-widget">
            <span>Username:</span><input/>
            <span>Password:</span><input/>
        </div>
    );
}

export default AppLoginComponent;