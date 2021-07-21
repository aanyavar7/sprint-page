import React, { Component, useState } from 'react'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import QuestionBox from "./components/QuestionBox.js"

const Legend = () => {
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
      <h1>Legend</h1>
      <div>
            <button onClick = {() => {qHandler(); qColorHandler();}} style={{backgroundColor: qColor}} className = "qButton">?</button>
        </div>
        {isQClicked && (
        <QuestionBox />
        )}
    </div>
    );
}

export default Legend;
