import React, { Component, useState } from 'react'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from 'react-router-dom';

const Help = () => {
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
      <h1>Help Page</h1>
      <div style={{width: 1000, height: 500, backgroundColor: 'red'}}></div>

      <h4> HELLLLLOOOOOOOOOOOO </h4>
      <div>
            {/* <button onClick = {() => {qHandler(); qColorHandler();}} style={{backgroundColor: qColor}} className = "qButton">?</button> */}
        </div>
        {/* {isQClicked && (
        <QuestionBox />
        )} */}
    </div>
  );
}

export default Help;