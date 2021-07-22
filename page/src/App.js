import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Landing from "./Landing.js"
import BI360 from "./BI360.js"
import FUSION from "./FUSION.js"
import Hero from "./Hero.js"
import Labyrinth from "./Labyrinth.js"
import Legend from "./Legend.js"
import LOLA from "./LOLA.js"
import OnePortal from "./OnePortal.js"
import PVA from "./PVA.js"
import RADAR from "./RADAR.js"
import SCA from "./SCA.js"
import SMMI from "./SMMI.js"
import Help from "./Help.js"
import React, { useState } from 'react';
import QuestionBox from "./components/QuestionBox.js"
import "./App.css";

const App = () => {
  const [isQClicked, setQClicked] = useState(false);
  const [qColor, setQColor] = useState('white');
  const [mColor, setMColor] = useState('white');
  const [isMClicked, setMClicked] = useState(false);

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

    const mColorHandler = () => {
      if(mColor == 'rgb(216, 145, 216)'){
        setMColor('white');
      }
      if(mColor == 'white'){
        setMColor('rgb(216, 145, 216)');
      }
    }

    const mHandler = () => {
      setMClicked(!isMClicked);
    }

  return (
    <div className = "App">
      <Router>
      <div>
           <Link to= "/Help"> <button onClick = {() => {qHandler(); qColorHandler();}} style={{backgroundColor: qColor}} className = "qButton">?</button></Link>
        </div>
        {isQClicked && (
        <Route path="/Help" exact>
        <Help />
      </Route>
        )}
      
      <button onClick = {mHandler}>
      <hr className = "menuLine"></hr>
      <hr className = "menuLine2"></hr>
      <hr className = "menuLine3"></hr>
      </button>

      {isMClicked && (
        <div style={{marginLeft: -60, paddingTop: 30}}>
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
    
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/BI360" exact>
        <BI360 />
      </Route>
      <Route path="/FUSION" exact>
        <FUSION />
      </Route>
      <Route path="/Hero" exact>
        <Hero />
      </Route>
      <Route path="/Labyrinth" exact>
        <Labyrinth />
      </Route>
      <Route path="/Legend" exact>
        <Legend />
      </Route>
      <Route path="/LOLA" exact>
        <LOLA />
      </Route>
      <Route path="/OnePortal" exact>
        <OnePortal />
      </Route>
      <Route path="/PVA" exact>
        <PVA />
      </Route>
      <Route path="/RADAR" exact>
        <RADAR />
      </Route>
      <Route path="/SCA" exact>
        <SCA />
      </Route>
      <Route path="/SMMI" exact>
        <SMMI />
      </Route>

    </Switch>
    </Router>
  </div>
    
  );
}

export default App;
