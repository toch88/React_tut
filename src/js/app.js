import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import queryString from 'query-string';


import Layout from "./components/Layout";
import Todos from "./components/Pages/Todos";
import Home from "./components/Pages/Home";
import Articles from "./components/Pages/Articles"
import Plot from "./components/Pages/Plot"
import Contacts from "./components/Pages/Contacts"

const app = document.getElementById('app');
const customHistory = createBrowserHistory();


ReactDOM.render( 
    <Router>         
        <Layout>            
            <Switch>
                 <Route exact path="/home/" component={Home} />
                <Route path="/home/:news" component={Home} />

                <Route path="/articles" component={Articles} />
                <Route path="/articles/:id" component={Articles} />

                <Route path="/todos" component = {Todos}/>  
                <Route path="/plot" component = {Plot}/>  
                <Route path="/contacts" component = {Contacts}/>    
            </Switch>            
        </Layout>        
    </Router>,
 app);

