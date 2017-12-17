import React, { Component } from 'react';
import './App.css';

import Login from './containers/Login'

import About from './components/About'

import Register from './containers/Register'

import FindNavBar from './components/FindNavBar'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import MessageNavBar from './components/MessageNavBar'

class App extends Component {

    constructor(){

        super();



    }

  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => {



                    return (

                    <Register/>

                    )



                }}/>

                <Route path="/about" render={() => {

                    return (

                        <About/>

                    )


                }}/>




            </Switch>

        </Router>







    );
  }
}

export default App;
