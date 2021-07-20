import './Header.css';
import {NavBar, Dropdown} from 'react-bootstrap';
import React, { useState } from 'react';
import QuestionBox from './QuestionBox';
import MenuBox from './MenuBox';

const Header = () => {
    const [isQClicked, setQClicked] = useState(false);
    const [isMClicked, setMClicked] = useState(false);
    const [qColor, setQColor] = useState('pink');
    const [mColor, setMColor] = useState('rgb(216, 145, 216)');

    const mColorHandler = () => {
      if(mColor == 'rgb(216, 145, 216)'){
        setMColor('white');
      }
      if(mColor == 'white'){
        setMColor('rgb(216, 145, 216)');
      }
    }
    const qHandler = () => {
      setQClicked(!isQClicked);
    }

    const mHandler = () => {
      setMClicked(!isMClicked);
    }

    const qColorHandler = () => {
      if(qColor == 'red'){
        setQColor('pink');
      }
      if(qColor == 'pink'){
        setQColor('red');
      }
};

    return (

    <div className="App">

    {/* <Dropdown className = "Behind-Button">
    <Dropdown.Toggle variant="secondary" size = "lg" className = "Button" img src = "menu.png" onClick = {mColorHandler} style = {{backgroundColor: mColor}}>
    <hr className = "menuLine"></hr>
    <hr className = "menuLine2"></hr>
    <hr className = "menuLine3"></hr>
    </Dropdown.Toggle>

    <Dropdown.Menu className = "Menu">
      <Dropdown.Item href="#/action-1">BI360</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-2">FUSION</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">Hero</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">Labyrinth</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">Legend</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">LOLA</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">OnePortal</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">PVA</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">RADAR</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">SCA</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">SMMI</Dropdown.Item>
      
    </Dropdown.Menu>
    </Dropdown> */}

<h1>Sprint Page</h1>

  <div>
    <button onClick = {() => {mColorHandler(); mHandler();}} style = {{backgroundColor: mColor}} className = "mButton">
      <hr className = "menuLine"></hr>
      <hr className = "menuLine2"></hr>
      <hr className = "menuLine3"></hr>
    </button>
  </div>

  <div>
    <button onClick = {() => {qHandler(); qColorHandler();}} style={{backgroundColor: qColor}} className = "qButton">?</button>
  </div>

  {isQClicked && (
    <QuestionBox />
  )}

  {isMClicked && (
    <MenuBox />
  )}



  </div>

    );
}
export default Header;