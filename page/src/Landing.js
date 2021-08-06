import QuestionBox from './components/QuestionBox';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Tabs, Tab } from '@material-ui/core'
import BI360 from "./BI360.js"
import Question from "./components/Question.js"
import NavBar from "./components/Landing-Comp/NavBar.js"
import "./App.css";

const Landing = () => {
  return (
    <div style={{paddingLeft: 90}} className = "bg">
    <div style={{bottom: '89%', left: 190, position: 'absolute', fontSize: 20, color: 'black', letterSpacing: '0.5mm'}}>
     <h1 style={{fontWeight:500}}>Sprint Page</h1>
   </div>
   <div>
   {/* <Question /> */}
   </div>
   <NavBar />
 </div>
  );
}

export default Landing;