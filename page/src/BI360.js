import React, { Component, useState } from 'react'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import QuestionBox from "./components/QuestionBox.js"
import NavBar from "./components/NavBar.js"
import Help from "./Help.js"

const BI360 = () => {
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
    <div style={{paddingLeft: 90}}>
       <div style={{bottom: '91%', left: 50, position: 'absolute'}}>
        <h1>Bi360</h1>
      </div>
      <div>
            <Link to="/Help"><button onClick = {() => {qHandler(); qColorHandler();}} style={{backgroundColor: qColor}} className = "qButton">?</button></Link>
        </div>
        {isQClicked && (
        <Help />
      //   <Route path="/Help" exact>
      //   <Help />
      // </Route>
        )}
      <NavBar />
    </div>
  );
}

export default BI360;