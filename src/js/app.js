import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'


import Layout from "./components/Layout";
import Todos from "./components/Pages/Todos";
import Home from "./components/Pages/Home";
import Contacts from "./components/Pages/Contacts"

const app = document.getElementById('app');
const customHistory = createBrowserHistory()

ReactDOM.render( 
    <Router>         
        <Layout>
            <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/todos" component = {Todos}/>  
            <Route path="/contacts" component = {Contacts}/>    
            </Switch>   
        </Layout>        
    </Router>,
 app);

 console.log(customHistory);