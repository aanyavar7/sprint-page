import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import BI360 from "../BI360.js";
import Landing from "../Landing.js";
import "./Menu.css"

const MenuBox = () => {
    return (
        <Router>
            <div>
            <Link to="/">SOMETHING <br/></Link>
            <Link to="/BI360">BI360</Link>
            </div>

                {/*<h2>
                
        <Link to= "/BI360"> BI360sdf <br/> <br/></Link>
                FUSION <br/> <br/>
                Hero <br/> <br/>
                Labyrinth <br/> <br/>
                Legend <br/> <br/>
                LOLA <br/> <br/>
                OnePortal <br/> <br/>
                PVA <br/> <br/>
                RADAR <br/> <br/>
                SCA <br/> <br/>
                SMMI 
                </h2>*/}

    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/BI360" exact>
        <BI360 />
      </Route>

    </Switch>
    </Router>
    );
}
export default MenuBox;