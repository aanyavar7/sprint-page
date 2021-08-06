import "./NavBar.css";
import {SprintBox,
        KPIBox,
        TargetBox,
        } from './DataBox.js'
import React, { useState, setState } from "react";

/* 
Sprints
KPIs
Targets
*/

const NavBar = () => {
  const [isSprint, setSprint] = useState(true);
  const [isKPI, setKPI] = useState(false);
  const [isTarget, setTarget] = useState(false);

  const [sprintColor, setSprintColor] = useState("#dce0fc");
  const [KPIColor, setKPIColor] = useState("white");
  const [targetColor, setTargetColor] = useState("white");

  const [sprintBorder, setSprintBorder] = useState("2px");
  const [KPIBorder, setKPIBorder] = useState("0px");
  const [targetBorder, setTargetBorder] = useState("0px");

  const [sprintFont, setSprintFont] = useState("#561B8E");
  const [KPIFont, setKPIFont] = useState("dimgray");
  const [targetFont, setTargetFont] = useState("dimgray");

  const sprintHandler = () => {
    setSprint(!isSprint);

    setTarget(false);
    setKPI(false);

    if (sprintColor == "white") {
      setSprintColor("#dce0fc");
      setKPIColor("white");
      setTargetColor("white");

      setSprintBorder("2px");
      setKPIBorder("0px");
      setTargetBorder("0px");

      setSprintFont("#561B8E");
      
      setKPIFont("dimgray");
      setTargetFont("dimgray");
    }
    if (sprintColor == "#dce0fc") {
      setSprintColor("white");
      setSprintBorder("0px");
      setSprintFont("dimgray");
    }
  };



  const KPIHandler = () => {
    setKPI(!isKPI);

    setSprint(false);
    setTarget(false);

    if (KPIColor == "white") {

      setKPIColor("#dce0fc");

      setSprintColor("white");
      setTargetColor("white");

      setKPIBorder("2px");

      setSprintBorder("0px");
      setTargetBorder("0px");

      setKPIFont("#561B8E");
    
      setSprintFont("dimgray");
      setTargetFont("dimgray");
    }
    if (KPIColor == "#dce0fc") {
      setKPIColor("white");
      setKPIBorder("0px");
      setKPIFont("dimgray");
    }
  };

  const targetHandler = () => {

    setTarget(!isTarget);

    setSprint(false);
    setKPI(false);

    if (targetColor == "white") {

      setTargetColor("#dce0fc");

      setSprintColor("white");
      setKPIColor("white");

      setTargetBorder("2px");

      setSprintBorder("0px");
      setKPIBorder("0px");

      setTargetFont("#561B8E");

      setSprintFont("dimgray");
      setKPIFont("dimgray");
    }
    if (targetColor == "#dce0fc") {
      setTargetColor("white");
      setTargetBorder("0px");
      setTargetFont("dimgray");
    }
  };

  return (
    <div className="App">
      <div style={{width: 1000, position: 'absolute', bottom: '82%', left: 440, paddingLeft: 600}}>
        <button
          style={{
            backgroundColor: sprintColor,
            borderBottomWidth: sprintBorder,
            color: sprintFont,
          }}
          onClick={sprintHandler}
          className="targetButton"
        >
          SPRINTS
        </button>
        {isSprint && <SprintBox />}

          <button
          style={{
            backgroundColor: KPIColor,
            borderBottomWidth: KPIBorder,
            color: KPIFont,
          }}
          onClick={KPIHandler}
          className="sprintButton"
        >
          KPIs
        </button>
        {isKPI && <KPIBox />}

        <button
          style={{
            backgroundColor: targetColor,
            borderBottomWidth: targetBorder,
            color: targetFont,
          }}
          onClick={targetHandler}
          className="targetButton"
        >
          TARGETS
        </button>
        {isTarget && <TargetBox />}

      </div>
    </div>
  );
}
export default NavBar;
