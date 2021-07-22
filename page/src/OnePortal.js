import React, { Component, useState } from 'react'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import QuestionBox from "./components/QuestionBox.js"
import Question from "./components/Question.js"
import NavBar from "./components/OnePortal-Comp/NavBar.js"

const OnePortal = () => {
    return (
      <div style={{paddingLeft: 90}}>
      <div style={{bottom: '88%', left: 140, position: 'absolute', fontSize: 26, color: 'darkmagenta'}}>
       <h1>OnePortal</h1>
     </div>
     <div>
     <Question />
     </div>
     <NavBar />
   </div>
    );
}

export default OnePortal;