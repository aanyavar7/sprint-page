import QuestionBox from './components/QuestionBox';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Tabs, Tab } from '@material-ui/core'
import BI360 from "./BI360.js"
import Question from "./components/Question.js"
import NavBar from "./components/Landing-Comp/NavBar.js"

const Landing = () => {
    return (
      <div style={{paddingLeft: 90}}>
      <div style={{bottom: '88%', left: 140, position: 'absolute', fontSize: 26, color: 'darkmagenta'}}>
       <h1>Sprint</h1>
     </div>
     <div>
     <Question />
     </div>
     <NavBar />
   </div>
    );
}


export default Landing;