import React, { useState } from 'react';
import LoginBox from "../LoginBox.js";
/* 
Sprints
Release Notes
Blockers
KPIs
NPS
Targets
Happiness
*/

import "./NavBar.css"


const SprintBox = () => {
    return (
    <div className="box"></div>
    );
};
const ReleaseBox = () => {
  return (
    <div className="box">
    </div>
  );
};
const BlockerBox = () => {
  const[isEnterClicked, setEnterClicked] = useState(false);
  const[eColor, setEColor] = useState('white');
  const [corrPassword, setPassword] = useState(false);
  const password = 'beertech2021!!!';
  
  const eHandler = () => {
    var userInput = window.prompt("You must be a beertech employee to enter a blocker.\nTo verify your identity, please enter the password:");

    if(userInput === password){
        setEnterClicked(!isEnterClicked);
        setPassword(true);
    } else {
      alert("Incorrect password entered! Please try again.");
    }

  }

  const eColorHandler = () => {
    if(eColor === 'white'){
        setEColor('pink');
    }

    // if(eColor === 'pink'){
    //   setEColor('white');
    // }
  }

  return (
    <div className="box">
            <button onClick = {() => {eHandler(); }} style = {{bottom: '91%', right: 50, position: 'absolute', border: '1px solid darkmagenta', 
            fontSize: '18px', height: '40px', width: '200px', backgroundColor: eColor}} className = 'enterButton'> Enter blocker</button>
    <div>
      {corrPassword && (
        eColorHandler(),
        <LoginBox /> //blocker form goes here! --> after form is filled then make enter button white again! 
      )}
    </div>
    
    </div>
  );
};
const KPIBox = () => {
  return (
    <div className="box"></div>
  );
};
const NPSBox = () => {
  return (
    <div className="box"></div>
  );
};
const TargetBox = () => {
  return (
    <div className="box"></div>
  );
};
const HappBox = () => {
  return (
    <div className="box"></div>
  );
};
export {
  SprintBox,
  ReleaseBox,
  BlockerBox,
  KPIBox,
  NPSBox,
  TargetBox,
  HappBox
}