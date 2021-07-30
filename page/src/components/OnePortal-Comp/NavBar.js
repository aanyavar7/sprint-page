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
  const [releaseColor, setReleaseColor] = useState("ghostwhite");
  const [blockerColor, setBlockerColor] = useState("ghostwhite");
  const [KPIColor, setKPIColor] = useState("ghostwhite");
  const [NPSColor, setNPSColor] = useState("ghostwhite");
  const [targetColor, setTargetColor] = useState("ghostwhite");
  const [happColor, setHappColor] = useState("ghostwhite");

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

    if (sprintColor == "ghostwhite") {
      setSprintColor("#f0dcfc");
      setReleaseColor("ghostwhite");
      setBlockerColor("ghostwhite");
      setKPIColor("ghostwhite");
      setNPSColor("ghostwhite");
      setTargetColor("ghostwhite");
      setHappColor("ghostwhite");

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
      setSprintColor("ghostwhite");
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

    if (releaseColor == "ghostwhite") {

      setReleaseColor("#f0dcfc");

      setSprintColor("ghostwhite");
      setBlockerColor("ghostwhite");
      setKPIColor("ghostwhite");
      setNPSColor("ghostwhite");
      setTargetColor("ghostwhite");
      setHappColor("ghostwhite");

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
      setReleaseColor("ghostwhite");
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

    if (blockerColor == "ghostwhite") {

      setBlockerColor("#f0dcfc");

      setSprintColor("ghostwhite");
      setReleaseColor("ghostwhite");
      setKPIColor("ghostwhite");
      setNPSColor("ghostwhite");
      setTargetColor("ghostwhite");
      setHappColor("ghostwhite");

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
      setBlockerColor("ghostwhite");
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

    if (KPIColor == "ghostwhite") {

      setKPIColor("#f0dcfc");

      setSprintColor("ghostwhite");
      setReleaseColor("ghostwhite");
      setBlockerColor("ghostwhite");
      setNPSColor("ghostwhite");
      setTargetColor("ghostwhite");
      setHappColor("ghostwhite");

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
      setKPIColor("ghostwhite");
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

    if (NPSColor == "ghostwhite") {

      setNPSColor("#f0dcfc");

      setSprintColor("ghostwhite");
      setReleaseColor("ghostwhite");
      setBlockerColor("ghostwhite");
      setKPIColor("ghostwhite");
      setTargetColor("ghostwhite");
      setHappColor("ghostwhite");

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
      setNPSColor("ghostwhite");
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

    if (targetColor == "ghostwhite") {

      setTargetColor("#f0dcfc");

      setSprintColor("ghostwhite");
      setReleaseColor("ghostwhite");
      setBlockerColor("ghostwhite");
      setKPIColor("ghostwhite");
      setNPSColor("ghostwhite");
      setHappColor("ghostwhite");

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
      setTargetColor("ghostwhite");
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

    if (happColor == "ghostwhite") {

      setHappColor("#f0dcfc");

      setSprintColor("ghostwhite");
      setReleaseColor("ghostwhite");
      setBlockerColor("ghostwhite");
      setKPIColor("ghostwhite");
      setNPSColor("ghostwhite");
      setTargetColor("ghostwhite");

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
      setHappColor("ghostwhite");
      setHappBorder("0px");
      setHappFont("dimgray");
    }
  };

  return (
    <div className="App">
      <div style={{width: 1000, position: 'absolute', bottom: '90%', left: 420, paddingLeft: 300, marginTop: 80}}>
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
