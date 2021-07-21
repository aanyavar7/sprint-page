import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import BI360 from "../BI360";

const MenuBox = () => {
    return (
        <Router>
        <div style={{ float: 'left', marginTop: '-15px', width: '140px', height: '800px' }}>
             <Box color="black" bgcolor="pink" p={1}>
                <h2>
                
        <Link to= "/BI360"> BI360 <br/> <br/></Link>
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
                </h2>
             </Box>
         </div>
         <Switch>
             <Route path = "/BI360" exact>
                 <BI360 />
             </Route>
         </Switch>
         </Router>
    );
}
export default MenuBox;