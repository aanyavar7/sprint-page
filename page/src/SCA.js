import React, { Component, useState } from 'react'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import QuestionBox from "./components/QuestionBox.js"
import Question from "./components/Question.js"
import NavBar from "./components/SCA-Comp/NavBar.js"

const SCA = () => {
    return (
      <div style={{paddingLeft: 90}}>
      <div style={{bottom: '91%', left: 50, position: 'absolute'}}>
       <h1>SCA</h1>
     </div>
     <div>
     <Question />
     </div>
     <NavBar />
   </div>
    );
}

export default SCA;