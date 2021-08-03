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
    const [sprintNumber, setSprintNumber] = useState(15);
    const[isLeftClicked, setLeftClicked] = useState(false);
    const[isRightClicked, setRightClicked] = useState(false);
    const [imgSrc, setImgSrc] = useState("https://i.ibb.co/p3ZW0kg/ado-data-2.png");
    const [textTitle, setTextTitle] = useState("We are on Day 7 of Sprint ");

    const leftClickHandler = () => {
      setSprintNumber(sprintNumber - 1);
      if(sprintNumber === 15){
      setImgSrc("https://i.ibb.co/RCGs7yW/ado-data-3.png");
        setTextTitle("Looking Back on Sprint ");
      }
    }

    const rightClickHandler = () => {
      if(sprintNumber === 14){
        setImgSrc("https://i.ibb.co/p3ZW0kg/ado-data-2.png")
        setTextTitle('We are on Day 7 of Sprint ');
      }
      setSprintNumber(sprintNumber + 1);
    }

    return (
    <div className="box">
      <div style={{display: 'flex'}}>
        {/* <h4>We are on Day</h4>
        <p>7</p>*/}
        <h5 style={{marginLeft: 100, marginTop: 37}}>{textTitle}</h5>
        <p style={{marginTop: 37}}>{sprintNumber}</p>
      
      </div>

        <h6 style={{marginTop: -50, marginRight: 100, backgroundColor: 'whitesmoke', paddingTop: 10, paddingBottom: 8, paddingLeft: 18, paddingRight: 18, border: "none", borderRadius: 10}}>Sprint {sprintNumber}</h6>
          <button onClick= {() => leftClickHandler()}
          style={{float: 'right', paddingLeft: 2, paddingRight: 2, borderRight: 'none', backgroundColor: 'white', marginTop: -50, marginRight: 300, fontSize: 27, fontWeight: 'bold', color: 'darkmagenta', border: 'none'}}> ᐸ
          </button>
          <button onClick= {() => rightClickHandler()}
          style={{float: 'right', paddingLeft: 2, paddingRight: 2, backgroundColor: 'white', marginTop: -50, marginRight: 130, fontSize: 27, fontWeight: 'bold', color: 'darkmagenta', border: 'none'}}> ᐳ
          </button>

      <img style={{height: '80%', width: '70%', marginLeft: 20, marginTop: -30}} src = {imgSrc}></img>

    </div>
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
  }

  return (
    <div>

<div className="box">
            <button onClick = {() => {eHandler(); }} style = {{bottom: '91%', right: 50, position: 'absolute', border: '1px solid darkmagenta', 
            fontSize: '18px', height: '40px', width: '200px', backgroundColor: eColor}} className = 'enterButton'> Enter blocker</button>
    <div>
      {corrPassword && (
        eColorHandler(),
        <LoginBox /> //blocker form goes here! --> after form is filled then make enter button white again! 
      )}
    </div>

    <div id="dialog" title="Basic dialog">
<input type="password" size="25" />
</div>
    
    </div>


    </div>
  );
};
const KPIBox = () => {
  return (
    <div className="box" style={{backgroundColor: '#171d31'}}>
      <div>
      <img style ={{width: 1075, height: 'auto', borderRadius: 25, display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: -1}} src={"https://i.ibb.co/yh4YP6Q/oneportal-kpi.png"}></img>
      </div>

    </div>
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
const RevBox = () => {
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
  RevBox
}