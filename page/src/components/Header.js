import './Header.css';
import {NavBar, Dropdown} from 'react-bootstrap';
import React, { useState } from 'react';
import QuestionBox from './QuestionBox';

const Header = () => {
    const [isClicked, setClicked] = useState(false);

    const qHandler = () => {
      setClicked(!isClicked);
    }

    return (

    <div className="App">

    <Dropdown className = "Behind-Button">
    <Dropdown.Toggle variant="secondary" size = "lg" className = "Button" img src = "menu.png">
      <img src = {"https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-1024.png"} alt="menu" width = "55" height = "55"/>
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
  </Dropdown>

  <h1>Sprint Page</h1>
  <button onClick = {qHandler} className = "qButton">?</button>
  {isClicked && (
    <QuestionBox />
  )}

  </div>

    );
}
export default Header;