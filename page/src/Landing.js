import Menu from './components/Menu.js'
import QuestionBox from './components/QuestionBox';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Tabs, Tab } from '@material-ui/core'
import BI360 from "./BI360.js"

const Landing = () => {
    const [isQClicked, setQClicked] = useState(false);
    const [qColor, setQColor] = useState('white');

    const qHandler = () => {
        setQClicked(!isQClicked);
    }

    const qColorHandler = () => {
        if(qColor === 'white'){
          setQColor('pink');
        }
        if(qColor === 'pink'){
          setQColor('white');
        }
    }

    const [isMClicked, setMClicked] = useState(false);
    const [mColor, setMColor] = useState('white');

    const mColorHandler = () => {
      if(mColor === 'rgb(216, 145, 216)'){
        setMColor('white');
      }
      if(mColor === 'white'){
        setMColor('rgb(216, 145, 216)');
      }
    }

    const mHandler = () => {
      setMClicked(!isMClicked);
    }

    return (
    <div>
      <div style={{bottom: '91%', left: 50, position: 'absolute'}}>
        <h1>Sprint Page</h1>
      </div>
        <div>
            <button onClick = {() => {qHandler(); qColorHandler();}} style={{backgroundColor: qColor}} className = "qButton">?</button>
        </div>
        {isQClicked && (
        <QuestionBox />
        )}
        <div>
                {/* <Tabs>
                    <Tab>Item one</Tab>
                </Tabs> */}
        </div>
        <div>

  </div>
{/* 
    <Router>
        <div>
        <Link to="/">SOMETHING <br/></Link>

        <Link to="/BI360">BI360</Link>
        </div>

    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/BI360" exact>
        <BI360 />
      </Route>

    </Switch>
    </Router> */}
    
    </div>
    );
}


export default Landing;