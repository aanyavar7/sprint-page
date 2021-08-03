/* 
Sprints
Release Notes
Blockers
KPIs
NPS
Targets
Happiness
*/

import React, { useState, setState } from "react";


const SprintBox = () => {

  return (
      <div className="box">
        <div style={{display: 'flex'}}>
          <h5 style={{marginLeft: 100, marginTop: 37}}>We are on Day 7 of Sprint</h5>
          <p style={{marginTop: 37}}>15</p>
        </div>
        <div>

        <h6 style={{marginTop: -50, marginRight: 100, backgroundColor: 'whitesmoke', paddingTop: 10, paddingBottom: 8, paddingLeft: 18, paddingRight: 18, border: "none", borderRadius: 10}}>Sprint 15</h6>
          <button
          style={{float: 'right', paddingLeft: 2, paddingRight: 2, borderRight: 'none', backgroundColor: 'white', marginTop: -50, marginRight: 300, fontSize: 27, fontWeight: 'bold', color: 'darkmagenta', border: 'none'}}> ᐸ
          </button>
          <button
          style={{float: 'right', paddingLeft: 2, paddingRight: 2, backgroundColor: 'white', marginTop: -50, marginRight: 130, fontSize: 27, fontWeight: 'bold', color: 'darkmagenta', border: 'none'}}> ᐳ
        </button>

        <img style ={{height: '80%', width: '70%', marginLeft: 70}} src={"https://i.ibb.co/zGxCm1J/ado-data-1.png"}></img>

        </div>
      </div>
    );
};
const KPIBox = () => {
  return (
    <div className="box">
    </div>
  );
};
const TargetBox = () => {
  return (
    <div className="box">
    </div>
  );
};
export {
SprintBox,
KPIBox,
TargetBox,
}