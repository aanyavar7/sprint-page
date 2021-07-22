import './Menu.css';
import {NavBar, Dropdown} from 'react-bootstrap';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
    <div>
      <div>
        <Link to="/"><h2>Sprint Page </h2></Link>
      </div>
      <div>
        <Link to="/BI360"><h2>BI360 </h2></Link>
      </div>
      <div>
        <Link to="/FUSION"><h2>FUSION </h2></Link>
      </div>
      <div>
        <Link to="/Hero"><h2>Hero </h2></Link>
      </div>
      <div>
      <Link to="/Labyrinth"><h2>Labyrinth </h2></Link>
      </div>
      <div>
      <Link to="/Legend"><h2>Legend </h2></Link>
      </div>
      <div>
      <Link to="/LOLA"><h2>LOLA </h2></Link>
      </div>
      <div>
      <Link to="/OnePortal"><h2>OnePortal </h2></Link>
      </div>
      <div>
      <Link to="/PVA"><h2>PVA </h2></Link>
      </div>
      <div>
      <Link to="/RADAR"><h2>RADAR </h2></Link>
      </div>
      <div>
      <Link to="/SCA"><h2>SCA </h2></Link>
      </div>
      <div>
      <Link to="/SMMI"><h2>SMMI </h2></Link>
      </div>
    </div>
  )}

  </div>

    );
}
export default Menu;