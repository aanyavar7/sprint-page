import React, { Component, useState } from 'react'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import QuestionBox from "./components/QuestionBox.js"
import Question from "./components/Question.js"
import NavBar from "./components/OnePortal-Comp/NavBar.js"
import "./App.css";

const OnePortal = () => {
    return (
      <div style={{paddingLeft: 90, backgroundColor: 'ghostwhite'}} className = "bg">
      <div style={{bottom: '88%', left: 170, position: 'absolute', fontSize: 22, color: 'black', letterSpacing: '0.5mm'}}>
       <h1>OnePortal</h1>
     </div>
     <div>
     {/* <Question /> */}
     </div>
     <NavBar />
   </div>
    );
}

export default OnePortal;