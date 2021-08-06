import React, { Component, useState } from 'react'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import QuestionBox from "./components/QuestionBox.js"
import Question from "./components/Question.js"
import NavBar from "./components/FUSION-Comp/NavBar.js"

const FUSION = () => {
    return (
      <div style={{paddingLeft: 90}}>
      <div style={{bottom: '88%', left: 140, position: 'absolute', fontSize: 26, color: '#383e82'}}>
       <h1>FUSION</h1>
     </div>
     <div>
     <Question />
     </div>
     <NavBar />
   </div>
    );
}

export default FUSION;