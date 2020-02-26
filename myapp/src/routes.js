import React from 'react';
import {Switch,Route} from 'react-router-dom'
import main from './components/main/main';
import Register from './components/register/register';
import Login from './components/register/login';
import Details from './components/main/details';
import Layout from './components/hoc';
import Award from './components/main/awardrec';
import Show from './components/main/show';
import Error from './components/main/404'
import Disp from './components/main/display';
import Education from './components/main/qualification';
import Forgot from './components/main/forgotpass';
import Forget from './components/main/forget'
import Allalum from './components/main/allcards'

const Routes = () => {
    return (
        <Layout>
        <Switch>
            

            <Route exact component={main} path="/"/>
            
            <Route exact component={Register} path="/register"/>
        
            <Route exact component={Login} path="/login"/>

            <Route exact component={Show} path="/show"/>

            <Route exact component={Award} path="/award"/>
            
            <Route exact component={Education} path="/qualify"/>

            
            <Route exact component={Forgot} path="/resetpass"/>
            
            <Route exact component={Details} path="/details"/>

            <Route exact component={Disp} path="/display"/>
            
            <Route exact component={Forget} path="/forget"/>

            <Route exact component={Allalum} path="/allalum"/>

            <Route component={Error} /> 

        
        </Switch>
        </Layout>
    );
};

export default Routes;