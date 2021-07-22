import React, { Component, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Help from "../Help.js"
import QuestionBox from "./QuestionBox.js"
import './QuestionBox.css'


const Question = () => {
    const [isQClicked, setQClicked] = useState(false);
    const [qColor, setQColor] = useState('white');

    const qHandler = () => {
        setQClicked(!isQClicked);
    }

    const qColorHandler = () => {
        if(qColor === 'white'){
          setQColor('pink');
        }
        if(qColor === 'pink'){
          setQColor('white');
        }
    }
    return (
        <div>
             <div>
            <button onClick = {() => {qHandler(); qColorHandler();}} style={{backgroundColor: qColor, bottom: '94%', right: 50, position: 'absolute'}} className = "qButton">?</button>
        </div>
        {isQClicked && (
             <QuestionBox />
        )}
        </div>

    );
}
export default Question;