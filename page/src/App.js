import './App.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar from 'react-bootstrap/Navbar';
import {NavBar, Nav, Dropdown} from 'react-bootstrap';
import { Container } from 'react-layout-components';

function App() {
  return (
    <div className="App">

    <Dropdown className = "Behind-Button">
      <Dropdown.Toggle variant="secondary" size = "lg" className = "Button">
        BUTTON!!!!!
      </Dropdown.Toggle>

      <Dropdown.Menu className = "Menu">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      {/* <header className="App-header">
        <p>
          YO YO YO :) Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>  */}
    </div>
  );
}

export default App;
