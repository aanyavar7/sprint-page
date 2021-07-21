import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import BI360 from "../BI360.js";

const MenuBox = () => {
    return (
        <div style={{ float: 'left', marginTop: '-15px', width: '140px', height: '800px' }}>
             <Box color="black" bgcolor="pink" p={1}>
                <h2>
                <Router>
        <Link to= "../BI360.js"> BI360 <br/> <br/></Link>
        <Route path= "../BI360.js" component={BI360} />
    </Router>
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
    );
}
export default MenuBox;