import "./NavBar.css";
import {SprintBox, 
        ReleaseBox,
        EffortBox,
        BlockerBox,
        KPIBox,
        NPSBox,
        TargetBox,
        HappBox
        } from './DataBox.js'
import React, { useState } from "react";

/* 
Sprints
Release Notes
Effort
Blockers
KPIs
NPS
Targets
Happiness
*/

const NavBar = () => {
  const [isSprint, setSprint] = useState(true);
  const [isRelease, setRelease] = useState(false);
  const [isBlocker, setBlocker] = useState(false);
  const [isKPI, setKPI] = useState(false);
  const [isNPS, setNPS] = useState(false);
  const [isTarget, setTarget] = useState(false);
  const [isHapp, setHapp] = useState(false);

  const [sprintColor, setSprintColor] = useState("#f0dcfc");
  const [releaseColor, setReleaseColor] = useState("white");
  const [blockerColor, setBlockerColor] = useState("white");
  const [KPIColor, setKPIColor] = useState("white");
  const [NPSColor, setNPSColor] = useState("white");
  const [targetColor, setTargetColor] = useState("white");
  const [happColor, setHappColor] = useState("white");

  const [sprintBorder, setSprintBorder] = useState("2px");
  const [releaseBorder, setReleaseBorder] = useState("0px");
  const [blockerBorder, setBlockerBorder] = useState("0px");
  const [KPIBorder, setKPIBorder] = useState("0px");
  const [NPSBorder, setNPSBorder] = useState("0px");
  const [targetBorder, setTargetBorder] = useState("0px");
  const [happBorder, setHappBorder] = useState("0px");

  const [sprintFont, setSprintFont] = useState("#561B8E");
  const [releaseFont, setReleaseFont] = useState("dimgray");
  const [blockerFont, setBlockerFont] = useState("dimgray");
  const [KPIFont, setKPIFont] = useState("dimgray");
  const [NPSFont, setNPSFont] = useState("dimgray");
  const [targetFont, setTargetFont] = useState("dimgray");
  const [happFont, setHappFont] = useState("dimgray");

  const sprintHandler = () => {
    setSprint(!isSprint);

    setRelease(false);
    setTarget(false);
    setBlocker(false);
    setKPI(false);
    setNPS(false);
    setTarget(false);
    setHapp(false);

    if (sprintColor == "white") {
      setSprintColor("#f0dcfc");
      setReleaseColor("white");
      setBlockerColor("white");
      setKPIColor("white");
      setNPSColor("white");
      setTargetColor("white");
      setHappColor("white");

      setSprintBorder("2px");
      setReleaseBorder("0px");
      setBlockerBorder("0px");
      setKPIBorder("0px");
      setNPSBorder("0px");
      setTargetBorder("0px");
      setHappBorder("0px");

      setSprintFont("#561B8E");

      setReleaseFont("dimgray");
      setBlockerFont("dimgray");
      setKPIFont("dimgray");
      setNPSFont("dimgray");
      setTargetFont("dimgray");
      setHappFont("dimgray");
    }
    if (sprintColor == "#f0dcfc") {
      setSprintColor("white");
      setSprintBorder("0px");
      setSprintFont("dimgray");
    }
  };

  const releaseHandler = () => {
    setRelease(!isRelease);

    setSprint(false);
    setTarget(false);
    setBlocker(false);
    setKPI(false);
    setNPS(false);
    setHapp(false);

    if (releaseColor == "white") {

      setReleaseColor("#f0dcfc");

      setSprintColor("white");
      setBlockerColor("white");
      setKPIColor("white");
      setNPSColor("white");
      setTargetColor("white");
      setHappColor("white");

      setReleaseBorder("2px");

      setSprintBorder("0px");
      setBlockerBorder("0px");
      setKPIBorder("0px");
      setNPSBorder("0px");
      setTargetBorder("0px");
      setHappBorder("0px");

      setReleaseFont("#561B8E");

      setSprintFont("dimgray");
      setBlockerFont("dimgray");
      setKPIFont("dimgray");
      setNPSFont("dimgray");
      setTargetFont("dimgray");
      setHappFont("dimgray");
    }
    if (releaseColor == "#f0dcfc") {
      setReleaseColor("white");
      setReleaseBorder("0px");
      setReleaseFont("dimgray");
    }
  };

  const blockerHandler = () => {
    setBlocker(!isBlocker);

    setSprint(false);
    setRelease(false);
    setTarget(false);
    setKPI(false);
    setNPS(false);
    setTarget(false);
    setHapp(false);

    if (blockerColor == "white") {

      setBlockerColor("#f0dcfc");

      setSprintColor("white");
      setReleaseColor("white");
      setKPIColor("white");
      setNPSColor("white");
      setTargetColor("white");
      setHappColor("white");

      setBlockerBorder("2px");

      setSprintBorder("0px");
      setReleaseBorder("0px");
      setKPIBorder("0px");
      setNPSBorder("0px");
      setTargetBorder("0px");
      setHappBorder("0px");

      setBlockerFont("#561B8E");
    
      setSprintFont("dimgray");
      setReleaseFont("dimgray");
      setKPIFont("dimgray");
      setNPSFont("dimgray");
      setTargetFont("dimgray");
      setHappFont("dimgray");
    }
    if (blockerColor == "#f0dcfc") {
      setBlockerColor("white");
      setBlockerBorder("0px");
      setBlockerFont("dimgray");
    }
  };

  const KPIHandler = () => {
    setKPI(!isKPI);

    setSprint(false);
    setRelease(false);
    setTarget(false);
    setBlocker(false);
    setNPS(false);
    setTarget(false);
    setHapp(false);

    if (KPIColor == "white") {

      setKPIColor("#f0dcfc");

      setSprintColor("white");
      setReleaseColor("white");
      setBlockerColor("white");
      setNPSColor("white");
      setTargetColor("white");
      setHappColor("white");

      setKPIBorder("2px");

      setSprintBorder("0px");
      setReleaseBorder("0px");
      setBlockerBorder("0px");
      setNPSBorder("0px");
      setTargetBorder("0px");
      setHappBorder("0px");

      setKPIFont("#561B8E");
    
      setSprintFont("dimgray");
      setReleaseFont("dimgray");
      setBlockerFont("dimgray");
      setNPSFont("dimgray");
      setTargetFont("dimgray");
      setHappFont("dimgray");
    }
    if (KPIColor == "#f0dcfc") {
      setKPIColor("white");
      setKPIBorder("0px");
      setKPIFont("dimgray");
    }
  };

  const NPSHandler = () => {
    setNPS(!isNPS);

    setSprint(false);
    setRelease(false);
    setTarget(false);
    setBlocker(false);
    setKPI(false);
    setTarget(false);
    setHapp(false);

    if (NPSColor == "white") {

      setNPSColor("#f0dcfc");

      setSprintColor("white");
      setReleaseColor("white");
      setBlockerColor("white");
      setKPIColor("white");
      setTargetColor("white");
      setHappColor("white");

      setNPSBorder("2px");

      setSprintBorder("0px");
      setReleaseBorder("0px");
      setBlockerBorder("0px");
      setKPIBorder("0px");
      setTargetBorder("0px");
      setHappBorder("0px");

      setNPSFont("#561B8E");
    
      setSprintFont("dimgray");
      setReleaseFont("dimgray");
      setBlockerFont("dimgray");
      setKPIFont("dimgray");
      setTargetFont("dimgray");
      setHappFont("dimgray");
    }
    if (NPSColor == "#f0dcfc") {
      setNPSColor("white");
      setNPSBorder("0px");
      setNPSFont("dimgray");
    }
  };

  const targetHandler = () => {

    setTarget(!isTarget);

    setSprint(false);
    setRelease(false);
    setBlocker(false);
    setKPI(false);
    setNPS(false);
    setHapp(false);

    if (targetColor == "white") {

      setTargetColor("#f0dcfc");

      setSprintColor("white");
      setReleaseColor("white");
      setBlockerColor("white");
      setKPIColor("white");
      setNPSColor("white");
      setHappColor("white");

      setTargetBorder("2px");

      setSprintBorder("0px");
      setReleaseBorder("0px");
      setBlockerBorder("0px");
      setKPIBorder("0px");
      setNPSBorder("0px");
      setHappBorder("0px");

      setTargetFont("#561B8E");

      setSprintFont("dimgray");
      setReleaseFont("dimgray");
      setBlockerFont("dimgray");
      setKPIFont("dimgray");
      setNPSFont("dimgray");
      setHappFont("dimgray")
    }
    if (targetColor == "#f0dcfc") {
      setTargetColor("white");
      setTargetBorder("0px");
      setTargetFont("dimgray");
    }
  };

  const happHandler = () => {

    setHapp(!isHapp);

    setSprint(false);
    setRelease(false);
    setBlocker(false);
    setKPI(false);
    setNPS(false);
    setTarget(false);

    if (happColor == "white") {

      setHappColor("#f0dcfc");

      setSprintColor("white");
      setReleaseColor("white");
      setBlockerColor("white");
      setKPIColor("white");
      setNPSColor("white");
      setTargetColor("white");

      setHappBorder("2px");

      setSprintBorder("0px");
      setReleaseBorder("0px");
      setBlockerBorder("0px");
      setKPIBorder("0px");
      setNPSBorder("0px");
      setTargetBorder("0px");

      setHappFont("#561B8E");

      setSprintFont("dimgray");
      setReleaseFont("dimgray");
      setBlockerFont("dimgray");
      setKPIFont("dimgray");
      setNPSFont("dimgray");
      setTargetFont("dimgray")
    }
    if (happColor == "#f0dcfc") {
      setHappColor("white");
      setHappBorder("0px");
      setHappFont("dimgray");
    }
  };

  return (
    <div className="App">
      <div style={{width: 1000, position: 'absolute', bottom: '82%', left: 440, paddingLeft: 270, marginTop: 80}}>
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
            backgroundColor: releaseColor,
            borderBottomWidth: releaseBorder,
            color: releaseFont,
          }}
          onClick={releaseHandler}
          className="targetButton"
        >
          RELEASE
        </button>
        {isRelease && <ReleaseBox />}

        <button
          style={{
            backgroundColor: blockerColor,
            borderBottomWidth: blockerBorder,
            color: blockerFont,
          }}
          onClick={blockerHandler}
          className="targetButton"
        >
          BLOCKERS
        </button>
        {isBlocker && <BlockerBox />}

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
            backgroundColor: NPSColor,
            borderBottomWidth: NPSBorder,
            color: NPSFont,
          }}
          onClick={NPSHandler}
          className="targetButton"
        >
          NPS
        </button>
        {isNPS && <NPSBox />}

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

        <button
          style={{
            backgroundColor: happColor,
            borderBottomWidth: happBorder,
            color: happFont,
          }}
          onClick={happHandler}
          className="sprintButton"
        >
          HAPPINESS
        </button>
        {isHapp && <HappBox />}

      </div>
    </div>
  );
}
export default NavBar;
