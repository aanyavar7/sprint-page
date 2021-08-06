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
    <div>

<div className="box">
        <div style={{display: 'flex'}}>
          <h5 style={{marginLeft: 100, marginTop: 37, fontWeight: 500}}>We are on Day 7 of Sprint</h5>
          <p style={{marginTop: 37, fontWeight: 500}}>15</p>
        </div>
        <div>

        <h6 style={{marginTop: -50, marginRight: 100, backgroundColor: 'whitesmoke', paddingTop: 10, paddingBottom: 8, paddingLeft: 18, paddingRight: 18, border: "none", borderRadius: 10, fontWeight: 500}}>Sprint 15</h6>
          <button
          style={{float: 'right', paddingLeft: 2, paddingRight: 2, borderRight: 'none', backgroundColor: 'white', marginTop: -50, marginRight: 300, fontSize: 27, fontWeight: 'bold', color: '#383e82', border: 'none'}}> ᐸ
          </button>
          <button
          style={{float: 'right', paddingLeft: 2, paddingRight: 2, backgroundColor: 'white', marginTop: -50, marginRight: 130, fontSize: 27, fontWeight: 'bold', color: '#383e82', border: 'none'}}> ᐳ
        </button>

        <img style ={{height: '80%', width: '70%', marginLeft: 70}} src={"https://i.ibb.co/zGxCm1J/ado-data-1.png"}></img>

        </div>
      </div>


<div style={{width: 210, marginLeft: 1180, boxShadow: 'none', paddingLeft: 30, marginRight: 30}} className ="box">
      <h5 style={{marginTop: 37, fontWeight: 500, fontSize: 18, marginBottom: 10}}>Key Updates:</h5>
      <div style={{marginBottom: 10}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify', paddingRight: 30}}>
      <b>• OnePortal National Rollout:</b> &nbsp; New platform for OnePortal &nbsp; &nbsp; piloted this week. Currently launched to 6 wholesalers and  &nbsp; &nbsp; plan to expand within next year.
      </h8>
      </div>

      <div style={{marginBottom: 10}}>
      <h8 style={{fontSize: 13, textAlign: 'justify'}}>
      <b>• Collective Genius Layout: </b> &nbsp; &nbsp;  &nbsp; &nbsp; New documents covering  &nbsp; &nbsp; BeerTech overview added.
      </h8>
      </div>

      <div style={{marginBottom: 10}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>• OnePortal Re-Platform Roadmap:</b> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Investment committee has approved onboarding an &nbsp; additional development pod to accelerate OnePortal timelines. &nbsp; The goal is to re-platform off of salesforce by end of 2021. The OnePortal product owner and devops lead are coordinating w/ leadership to provide timelines based upon funding/resources. Final review scheduled for 7/21 then new timelines will be distributed across the OnePortal Wiki and in this update.
      </h8>
      </div>

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