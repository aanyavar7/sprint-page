import React, { useState } from 'react';
import LoginBox from "../LoginBox.js";
/* 
Sprints
Release Notes
Blockers
KPIs
NPS
Targets
Happiness
*/

import "./NavBar.css"


const SprintBox = () => {
    const [sprintNumber, setSprintNumber] = useState(15);
    const[isLeftClicked, setLeftClicked] = useState(false);
    const[isRightClicked, setRightClicked] = useState(false);
    const [imgSrc, setImgSrc] = useState("https://i.ibb.co/p3ZW0kg/ado-data-2.png");
    const [textTitle, setTextTitle] = useState("We are on Day 7 of Sprint ");

    const leftClickHandler = () => {
      setSprintNumber(sprintNumber - 1);
      if(sprintNumber === 15){
      setImgSrc("https://i.ibb.co/RCGs7yW/ado-data-3.png");
        setTextTitle("Looking Back on Sprint ");
      }
    }

    const rightClickHandler = () => {
      if(sprintNumber === 14){
        setImgSrc("https://i.ibb.co/p3ZW0kg/ado-data-2.png")
        setTextTitle('We are on Day 7 of Sprint ');
      }
      setSprintNumber(sprintNumber + 1);
    }

    return (
      <div>

<div className="box">
      <div style={{display: 'flex'}}>
        {/* <h4>We are on Day</h4>
        <p>7</p>*/}
        <h5 style={{marginLeft: 100, marginTop: 37, fontWeight: 500}}>{textTitle}</h5>
        <p style={{marginTop: 37, fontWeight: 500}}>{sprintNumber}</p>
      
      </div>

        <h6 style={{marginTop: -50, marginRight: 100, backgroundColor: 'whitesmoke', paddingTop: 10, paddingBottom: 8, paddingLeft: 18, paddingRight: 18, border: "none", borderRadius: 10, fontWeight: 500}}>Sprint {sprintNumber}</h6>
          <button onClick= {() => leftClickHandler()}
          style={{float: 'right', paddingLeft: 2, paddingRight: 2, borderRight: 'none', backgroundColor: 'white', marginTop: -50, marginRight: 300, fontSize: 27, fontWeight: 'bold', color: '#383e82', border: 'none'}}> ᐸ
          </button>
          <button onClick= {() => rightClickHandler()}
          style={{float: 'right', paddingLeft: 2, paddingRight: 2, backgroundColor: 'white', marginTop: -50, marginRight: 130, fontSize: 27, fontWeight: 'bold', color: '#383e82', border: 'none'}}> ᐳ
          </button>

      <img style={{height: '80%', width: '70%', marginLeft: 20, marginTop: -30}} src = {imgSrc}></img>

      <div style={{marginLeft: 1200}}>
        <h2>HI BITCH</h2>
      </div>

    </div>

    <div style={{width: 210, marginLeft: 1180, boxShadow: 'none', paddingLeft: 30, marginRight: 30}} className ="box">
<h5 style={{marginTop: 37, fontWeight: 500, fontSize: 18, marginBottom: 10}}>Key Updates:</h5>
<div style={{marginBottom: 10}}>
<h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify', paddingRight: 30}}>
<b>• Trade Returns Rollout:</b> Onboarded 3 WSLR's last week. Remaining 5 WSLR's have requested to be moved to this &nbsp; week to better accommodate schedules.
</h8>
</div>

<div style={{marginBottom: 10}}>
<h8 style={{fontSize: 13, textAlign: 'justify'}}>
<b>• Trade Returns Development:</b> &nbsp; &nbsp; 4 critical features left before national roll-out can begin (2 in progress). Details below.
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
const ReleaseBox = () => {
  return (
    <div style={{overflow: 'auto'}} className="box">
      <form>
        <h5 style={{marginLeft: 100, marginTop: 37, marginBottom: 30, fontWeight: 500}}>Sprint Release Notes Submission</h5>
        <h8 style={{marginLeft: 100, marginBottom: 100}}>Use this form to submit your release notes for the sprint. At the end of the sprint, it will be posted here! </h8>
        <div style={{marginTop: 40}}>
          <h9 style={{marginLeft: 100, marginTop: 10, fontWeight: 'bold', fontSize: 16}}>1) Overview:</h9>
        </div>
        <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20}}id="textarea" contenteditable="true">
          <ul>
              <li></li>
          </ul>
        </section>
          <div style={{marginTop: 40}}>
          <h9 style={{marginLeft: 100, marginTop: 10, fontWeight: 'bold', fontSize: 16}}>2) Solution:</h9>
        </div>
        <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20}}id="textarea" contenteditable="true">
          <ul>
              <li></li>
          </ul>
        </section>

        <div style={{marginTop: 40}}>
          <h9 style={{marginLeft: 100, marginTop: 10, fontWeight: 'bold', fontSize: 16}}>2) End-User Impact:</h9>
        </div>
        <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20}}id="textarea" contenteditable="true">
          <ul>
              <li></li>
          </ul>
        </section>

        <div style={{marginTop: 40}}>
          <h9 style={{marginLeft: 100, marginTop: 10, fontWeight: 'bold', fontSize: 16}}>2) Support Impacts:</h9>
        </div>
        <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20}}id="textarea" contenteditable="true">
          <ul>
              <li></li>
          </ul>
        </section>

        <div style={{marginTop: 40}}>
          <h9 style={{marginLeft: 100, marginTop: 10, fontWeight: 'bold', fontSize: 16}}>2) Collaboration Opportunities:</h9>
        </div>
        <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20}}id="textarea" contenteditable="true">
          <ul>
              <li></li>
          </ul>
        </section>

        <div style={{marginTop: 40}}>
          <h9 style={{marginLeft: 100, marginTop: 10, fontWeight: 'bold', fontSize: 16}}>2) Notes:</h9>
        </div>
        <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20, paddingBottom: 30}}id="textarea" contenteditable="true">
          <ul>
              <li></li>
          </ul>
        </section>

      </form>

      <div style={{MozMarginStart: 100, marginBottom: 20, marginTop: 10}}>
        <button style={{fontWeight: 'bold', backgroundColor: '#383e82', border: 'none', color: 'white', width: 100, padding:10, borderRadius: 10, fontSize: 16, letterSpacing: '0.2mm', marginLeft: 100, marginTop: 10}}>
          SUBMIT
        </button>
      </div>

    </div>
  );
};
const BlockerBox = () => {
  // const[isEnterClicked, setEnterClicked] = useState(false);
  // const[eColor, setEColor] = useState('white');
  // const [corrPassword, setPassword] = useState(false);
  // const password = 'beertech2021!!!';
  
  // const eHandler = () => {
  //   var userInput = window.prompt("You must be a beertech employee to enter a blocker.\nTo verify your identity, please enter the password:");

  //   if(userInput === password){
  //       setEnterClicked(!isEnterClicked);
  //       setPassword(true);
  //   } else {
  //     alert("Incorrect password entered! Please try again.");
  //   }

  // }

  // const eColorHandler = () => {
  //   if(eColor === 'white'){
  //       setEColor('pink');
  //   }
  // }

  const [mColor, setMColor] = useState('white');
  const [isMClicked, setMClicked] = useState(false);
  const [rColor, setRColor] = useState('white');
  const [isRClicked, setRClicked] = useState(false);



    const mHandler = () => {
      setMClicked(!isMClicked);
      if(mColor == '#eaeaec'){
        setMColor('white');
      }
      if(mColor != '#eaeaec') {
        setMColor('#eaeaec');
      }
    }

    const rHandler = () => {
      setRClicked(!isRClicked);
      if(rColor == '#eaeaec'){
        setRColor('white');
      }
      if(rColor != '#eaeaec') {
        setRColor('#eaeaec');
      }
    }


  return (
    <div style={{overflowX: 'hidden', overflowY: 'auto'}} className="box">
      <div>
        <h5 style={{marginLeft: 100, marginTop: 37, marginBottom: 30, fontWeight: 500}}>Sprint Blockers Submission</h5>
        <h8 style={{marginLeft: 100, marginBottom: 100}}>Use this form to submit your blockers for the sprint! </h8>
      </div>

      <button style={{backgroundColor: mColor, border: '1px solid lightgray', width: 180, padding:10, borderRadius: 10, fontSize: 16, marginLeft: 100, marginTop: 31}} onClick = {mHandler}>
        Choose a Task   &nbsp;  ▼
      </button>

      { isMClicked && (
        <div>
        <div style={{marginLeft: 100, marginTop: 15}}>
              <div style={{padding: 5}}> 
                  <input type="checkbox" name="vehicle" id="option1" value="" />
                  <label for="option2">Solve data elements issue</label>
              </div>
              <div style={{padding: 5}}> 
                  <input type="checkbox" name="vehicle" id="option2" />
                  <label  for="option2">Remove carrier from shipment when it has been unassigned in TMS</label>
              </div>
              <div style={{padding: 5}}> 
                <input type="checkbox" name="vehicle" id="option3" />
                <label for="option2">Option to delete materials inventory</label>
            </div>
            <div style={{padding: 5}}> 
              <input type="checkbox" name="vehicle" id="option4" />
              <label for="option2">Update LucidCharts with forecasting architecture</label>
            </div>
         <div style={{padding: 5}}> 
            <input type="checkbox" name="vehicle" id="option3" />
            <label for="option2">Figure out what data already exists in snowflake</label>
          </div>
          <div style={{padding: 5}}> 
            <input type="checkbox" name="vehicle" id="option2" />
            <label for="option2">   Incorporate BeerInfo Modal to Create/Edit shipment screen</label>
          </div>
          <div style={{padding: 5}}> 
            <input type="checkbox" name="vehicle" id="option2" />
            <label for="option2">  Modify UpdateShipment to include BeerAuth Tables</label>
          </div>
          <div style={{padding: 5}}> 
            <input type="checkbox" name="vehicle" id="option2" />
            <label for="option2"> Create domain entries for OnePortal prod</label>
          </div>
          <div style={{padding: 5}}> 
            <input type="checkbox" name="vehicle" id="option2" />
            <label  for="option2">Defective cooperage claim initial setup</label>
          </div>
          <div style={{padding: 5}}> 
            <input type="checkbox" name="vehicle" id="option2" />
            <label  for="option2">Enable click to select - RAs</label>
          </div>
          <div style={{padding: 5}}> 
            <input type="checkbox" name="vehicle" id="option2" />
            <label  for="option2">Implement ONP Flag</label>
          </div>
  </div>
</div>
      )}

      <div>
      <button style={{backgroundColor: rColor, border: '1px solid lightgray', width: 180, padding:10, borderRadius: 10, fontSize: 16, marginLeft: 100, marginTop: 31}} onClick = {rHandler}>
        Choose a Reason   &nbsp;  ▼
      </button>

      { isRClicked && (
        <div>
        <div style={{marginLeft: 100, marginTop: 15}}>
              <div style={{padding: 5}}> 
                  <input type="checkbox" name="vehicle" id="option1" value="" />
                  <label for="option2">Task is harder than anticipated</label>
              </div>
              <div style={{padding: 5}}> 
                  <input type="checkbox" name="vehicle" id="option2" />
                  <label  for="option2">Team member is affected by Covid/personal circumstances</label>
              </div>
              <div style={{padding: 5}}> 
                <input type="checkbox" name="vehicle" id="option3" />
                <label for="option2">Missing information/resources</label>
            </div>
            <div style={{padding: 5}}> 
              <input type="checkbox" name="vehicle" id="option4" />
              <label for="option2">Too much technical complexity</label>
            </div>
         <div style={{padding: 5}}> 
            <input type="checkbox" name="vehicle" id="option3" />
            <label for="option2">Need to rework task</label>
          </div>
          <div style={{padding: 5}}> 
            <input type="checkbox" name="vehicle" id="option2" />
            <label for="option2">Other (specify in note)</label>
          </div>
  </div>
</div>
      )}

      </div>

      <div style={{marginTop: 30}}>
        <h9 style={{marginLeft: 100, marginTop: 30, fontWeight: 'bold', fontSize: 16}}>Notes:</h9>
      </div>

      <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20}}id="textarea" contenteditable="true">
          <ul>
          </ul>
        </section>


  <div style={{MozMarginStart: 100, marginBottom: 20, marginTop: 10}}>
        <button style={{fontWeight: 'bold', backgroundColor: '#383e82', border: 'none', color: 'white', width: 100, padding:10, borderRadius: 10, fontSize: 16, letterSpacing: '0.2mm', marginLeft: 100, marginTop: 10}} onClick = {mHandler}>
          SUBMIT
        </button>
  </div>

  {/* <div style={{width: 210, marginLeft: 1180, marginTop: -45, boxShadow: 'none', paddingLeft: 30, marginRight: 10}} className ="box">
      <h5 style={{marginTop: 37, fontWeight: 500, fontSize: 18, marginBottom: 10}}>Key Updates:</h5>
      <div style={{marginBottom: 10}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>• Trade Returns Rollout:</b> Onboarded 3 WSLR's last week. Remaining 5 WSLR's have requested to be moved to this week to better accommodate schedules.
      </h8>
      </div>

      <div style={{marginBottom: 10}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>• Trade Returns Development:</b>  &nbsp; 4 critical features left before national roll-out can begin (2 in progress). Details below.
      </h8>
      </div>

      <div style={{marginBottom: 10}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>• OnePortal Re-Platform Roadmap:</b> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Investment committee has approved onboarding an additional development pod to accelerate OnePortal timelines. The goal is to re-platform off of salesforce by end of 2021. The OnePortal product owner and devops lead are coordinating w/ leadership to provide timelines based upon funding/resources. Final review scheduled for 7/21 then new timelines will be distributed across the OnePortal Wiki and in this update.
      </h8>
      </div>

      </div> */}

  </div>

  );


{/* <div className="box">
            <button onClick = {() => {eHandler(); }} style = {{bottom: '91%', right: 50, position: 'absolute', border: '1px solid #383e82', 
            fontSize: '18px', height: '40px', width: '200px', backgroundColor: eColor}} className = 'enterButton'> Enter blocker</button>
    <div>
      {corrPassword && (
        eColorHandler(),
        <LoginBox /> //blocker form goes here! --> after form is filled then make enter button white again! 
      )}
    </div>

    <div id="dialog" title="Basic dialog">
<input type="password" size="25" />
</div>
    
    </div> */}
};
const KPIBox = () => {
  return (
    <div>
       <div className="box" style={{backgroundColor: '#171d31'}}>
      <div>
      <img style ={{width: 1075, height: 'auto', borderRadius: 25, display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: -1}} src={"https://i.ibb.co/yh4YP6Q/oneportal-kpi.png"}></img>
      </div>

    </div>

<div style={{width: 210, marginLeft: 1180, boxShadow: 'none', paddingLeft: 30, marginRight: 10}} className ="box">
      <h5 style={{marginTop: 37, fontWeight: 500, fontSize: 18, marginBottom: 20}}>Key KPIs:</h5>
      <div style={{marginBottom: 20}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>• OTR Revlog Freight Cost</b>
      </h8>
      </div>

      <div style={{marginBottom: 20}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>• Freight Optimization</b>  &nbsp;
      </h8>
      </div>

      <div style={{marginBottom: 20}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>• Materials Planning</b>
      </h8>
      </div>

      </div>


    </div>
  );
};
const TargetBox = () => {
  return (
    <div>
          <div className="box">
      <h5 style={{marginLeft: 100, marginTop: 37, marginBottom: 30, fontWeight: 500}}>OnePortal Targets</h5>
      <img style={{height: '80%', width: '70%', marginLeft: 50, marginTop: -20}} src = {'https://i.ibb.co/f1NCMbw/ado-targets.png'}></img>
    </div>


<div style={{width: 210, marginLeft: 1180, boxShadow: 'none', paddingLeft: 30, marginRight: 10}} className ="box">
      <h5 style={{marginTop: 37, fontWeight: 500, fontSize: 18, marginBottom: 10}}>2021 Agenda:</h5>
      <div style={{marginBottom: 20}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>1) Trade Returns: </b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Trade returns is the process by which WSLR's return &nbsp; &nbsp; warehousing materials (pallets, kegs, etc…) and damaged &nbsp; products (freights claims) to our breweries/DC's.
      </h8>
      </div>

      <div style={{marginBottom: 20}}>
      <h8 style={{fontSize: 13, overflow: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>2) Replatform </b></h8>
      </div>

      <div style={{marginBottom: 20}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto'}}>
      <b>3) OnePortal National Rollout:</b> &nbsp;  &nbsp; As OnePortal has redesigned &nbsp; &nbsp; their platform, wholesalers need &nbsp; &nbsp; to learn how to use it and developers need to get feedback from them.
      </h8>
      </div>

      </div>
    </div>
  );
};
const RevBox = () => {
  return (
    <div style={{overflowX: 'hidden', overflowY: 'auto'}} className="box">
    <form>
      <h5 style={{marginLeft: 100, marginTop: 37, marginBottom: 30, fontWeight: 500}}>Sprint Review Submission</h5>
      <h8 style={{marginLeft: 100, marginBottom: 100}}>Use this form to submit your review for the sprint. At the end of the sprint, it will be posted here! </h8>
      <div style={{marginTop: 40}}>
        <h9 style={{marginLeft: 100, marginTop: 10, fontWeight: 'bold', fontSize: 16}}>1) What went well during this Sprint? </h9>
      </div>
      <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20}}id="textarea" contenteditable="true">
        <ul>
            <li></li>
        </ul>
      </section>
        <div style={{marginTop: 40}}>
        <h9 style={{marginLeft: 100, marginTop: 10, fontWeight: 'bold', fontSize: 16}}>2) What challenges did you experience during this Sprint?</h9>
      </div>
      <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20}}id="textarea" contenteditable="true">
        <ul>
            <li></li>
        </ul>
      </section>

      <div style={{marginTop: 40}}>
        <h9 style={{marginLeft: 100, marginTop: 10, fontWeight: 'bold', fontSize: 16}}>2) Shout-outs:</h9>
      </div>
      <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20}}id="textarea" contenteditable="true">
        <ul>
            <li></li>
        </ul>
      </section>

      <div style={{marginTop: 40}}>
        <h9 style={{marginLeft: 100, marginTop: 10, fontWeight: 'bold', fontSize: 16}}>2) Additional Info:</h9>
      </div>
      <section style={{border: '1px solid lightgray', width: 900, minHeight: 150, height: 'auto', borderRadius: 10, marginLeft: 100, marginTop: 20}}id="textarea" contenteditable="true">
        <ul>
            <li></li>
        </ul>
      </section>

    </form>
    <div style={{MozMarginStart: 100, marginBottom: 20, marginTop: 10}}>
        <button style={{fontWeight: 'bold', backgroundColor: '#383e82', border: 'none', color: 'white', width: 100, padding:10, borderRadius: 10, fontSize: 16, letterSpacing: '0.2mm', marginLeft: 100, marginTop: 10}}>
          SUBMIT
        </button>
      </div>
      <div style={{width: 210, marginLeft: 1420, marginTop: -45, boxShadow: 'none', paddingLeft: 30, marginRight: 10}} className ="box">
      <h5 style={{marginTop: 37, fontWeight: 500, fontSize: 18, marginBottom: 10}}>Key Updates:</h5>
      <div style={{marginBottom: 10}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>• Trade Returns Rollout:</b> Onboarded 3 WSLR's last week. Remaining 5 WSLR's have requested to be moved to this week to better accommodate schedules.
      </h8>
      </div>

      <div style={{marginBottom: 10}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>• Trade Returns Development:</b>  &nbsp; 4 critical features left before national roll-out can begin (2 in progress). Details below.
      </h8>
      </div>

      <div style={{marginBottom: 10}}>
      <h8 style={{fontSize: 13, overflowX: 'hidden', overflowY: 'auto', textAlign: 'justify'}}>
      <b>• OnePortal Re-Platform Roadmap:</b> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Investment committee has approved onboarding an additional development pod to accelerate OnePortal timelines. The goal is to re-platform off of salesforce by end of 2021. The OnePortal product owner and devops lead are coordinating w/ leadership to provide timelines based upon funding/resources. Final review scheduled for 7/21 then new timelines will be distributed across the OnePortal Wiki and in this update.
      </h8>
      </div>

      </div>
  </div>
  );
};
export {
  SprintBox,
  ReleaseBox,
  BlockerBox,
  KPIBox,
  TargetBox,
  RevBox
}