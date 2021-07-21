import './Menu.css';
import {NavBar, Dropdown} from 'react-bootstrap';
import React, { useState } from 'react';
import QuestionBox from './QuestionBox';
import MenuBox from './MenuBox';

const Menu = () => {
    const [isMClicked, setMClicked] = useState(false);
    const [mColor, setMColor] = useState('white');

    const mColorHandler = () => {
      if(mColor === 'rgb(216, 145, 216)'){
        setMColor('white');
      }
      if(mColor === 'white'){
        setMColor('rgb(216, 145, 216)');
      }
    }

    const mHandler = () => {
      setMClicked(!isMClicked);
    }

    return (

    <div className="Menu">

  <div>
    <button onClick = {() => {mColorHandler(); mHandler();}} style = {{backgroundColor: mColor}} className = "mButton">
      <hr className = "menuLine"></hr>
      <hr className = "menuLine2"></hr>
      <hr className = "menuLine3"></hr>
    </button>
  </div>

  {isMClicked && (
    <MenuBox />
  )}

  </div>

    );
}
export default Menu;