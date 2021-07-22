import React, { Component, useState } from 'react'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import QuestionBox from "./components/QuestionBox.js"
import NavBar from "./components/BI360-Comp/NavBar.js"
import Login from "./components/Login.js"
import Help from "./Help.js"
import Question from "./components/Question.js"
import "./App.css"

const BI360 = () => {

  return (
    <div style={{paddingLeft: 90}}>
       <div style={{bottom: '88%', left: 140, position: 'absolute', fontSize: 26, color: 'darkmagenta'}}>
        <h1>BI360</h1>
      </div>
      <div>
      <Question />
      </div>
      <NavBar />
      <div>
        <Login />
        </div>
    </div>
  );
}

export default BI360;