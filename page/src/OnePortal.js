import React, { Component, useState } from 'react'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import QuestionBox from "./components/QuestionBox.js"
import Question from "./components/Question.js"
import NavBar from "./components/OnePortal-Comp/NavBar.js"
import "./App.css";

const OnePortal = () => {
    return (
      <div style={{paddingLeft: 90}} className = "bg">
      {/* <div style={{bottom: '89%', left: 190, position: 'absolute', fontSize: 26, color: 'black', letterSpacing: '0.5mm'}}>
       <h1 style={{fontSize: 26, color: '#383e82'}}>ONEPORTAL</h1>
     </div> */}
     <div style={{bottom: '86%', left: 190, position: 'absolute', fontSize: 26, color: '#383e82'}}>
       <h1>ONEPORTAL</h1>
     </div>
     <div>
     {/* <Question /> */}
     </div>
     <NavBar />
   </div>
    );
}

export default OnePortal;