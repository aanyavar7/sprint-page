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

    const mHandler = () => {
      setMClicked(!isMClicked);
      if(mColor == 'darkmagenta'){
        setMColor('white');
      }
      if(mColor != 'darkmagenta') {
        setMColor('darkmagenta');
      }
    }

  return (
    <div className = "App">
      <div style={{backgroundColor: '#f3ecf3', borderRadius: 25, marginTop: 2, width: '114vw', height: 100, marginBottom: 10}}>
      <Router>
      <div>
           {/* <Link to= "/Help"> <button onClick = {() => {qHandler(); qColorHandler();}} style={{backgroundColor: qColor}} className = "qButton">?</button></Link> */}
        </div>
        {/* {isQClicked && (
        <Route path="/Help" exact>
        <Help />
      </Route> }
        )*/}
      <button className = "bShadow" style = {{backgroundColor: mColor, border: 'none', borderRadius: 100, height: 65, width: 65, marginLeft: 15, marginTop: 20, marginBottom: 10, }} onClick = {mHandler}>
        <img src= "https://i.ibb.co/WWxQ6Xs/menu-removebg-preview-2.png" alt="menu-removebg-preview-2" alt = "my image" style = {{height: 65, width: 65, marginLeft: -5}}></img>
      </button>

      {isMClicked && (
        <div className = "boxShadow" style={{borderRadius: 25, width: 160, height: 450, paddingTop: 20, marginLeft: 20, zIndex: 1000, marginTop: -5, paddingHorizontal: 15, backgroundColor: 'white', border: '0.5px solid lightgray'}}>
        <div style={{marginLeft: -40, marginTop: 10, marginBottom: 10}}>
            <Link className = "link" to="/"><h2>Overall </h2></Link>
          </div>
          <hr className = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
            <Link className = "link"to="/BI360"><h2>BI360 </h2></Link>
          </div>
          <hr class = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
            <Link className = "link"to="/FUSION"><h2>FUSION </h2></Link>
          </div>
          <hr class = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
            <Link className = "link"to="/Hero"><h2>Hero </h2></Link>
          </div>
          <hr class = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
          <Link className = "link"to="/Labyrinth"><h2>Labyrinth </h2></Link>
          </div>
          <hr class = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
          <Link className = "link"to="/Legend"><h2>Legend </h2></Link>
          </div>
          <hr class = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
          <Link className = "link"to="/LOLA"><h2>LOLA </h2></Link>
          </div>
          <hr class = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
          <Link className = "link"to="/OnePortal"><h2>OnePortal </h2></Link>
          </div>
          <hr class = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
          <Link className = "link"to="/PVA"><h2>PVA </h2></Link>
          </div>
          <hr class = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
          <Link className = "link"to="/RADAR"><h2>RADAR </h2></Link>
          </div>
          <hr class = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
          <Link className = "link"to="/SCA"><h2>SCA </h2></Link>
          </div>
          <hr class = "boxline" />
          <div style={{marginLeft: -40, marginTop: 5, marginBottom: 5}}>
          <Link className = "link"to="/SMMI"><h2>SMMI </h2></Link>
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



      </div>
  );
}

export default App;
