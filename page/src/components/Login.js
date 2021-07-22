import React, { useState, Component } from 'react';
import LoginBox from './LoginBox.js'
import './LoginBox.css'


const Login = () => {
    const [isLogClicked, setLogClicked] = useState(false);
    const [logColor, setLogColor] = useState('white');

    const logHandler = () => {
        setLogClicked(!isLogClicked);
    }

    const logColorHandler = () => {
        if(logColor === 'white'){
            setLogColor('pink');
        }
        if(logColor === 'pink'){
            setLogColor('white');
        }
    }

    return (
        <div>
            <div>
            <button onClick = {() => {logHandler(); logColorHandler();}} style = {{backgroundColor: logColor,bottom: '88%', right: 50, position: 'absolute', border: 'none', fontSize: '14px'}} className = 'logButton'> Sign in </button>
            </div>

            {isLogClicked && (
                <LoginBox />
            )}

        </div>
    );

}
export default Login;