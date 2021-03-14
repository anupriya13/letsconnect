import React from 'react';
import { Container } from '@material-ui/core';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Menubar from './components/Menubar/Menubar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => (
   
    <BrowserRouter>
        <Container maxwidth = "lg">
         <Navbar />   
         <Menubar />
         <Switch>
             <Route path = "/" exact component = {Home} />
             <Route path = "/auth" exact component = {Auth} />
         </Switch>
   
        </Container>
    </BrowserRouter>
        
    
);

export default App;