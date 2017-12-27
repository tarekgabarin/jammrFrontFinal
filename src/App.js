import React, {Component} from 'react';
import './App.css';

import Login from './containers/Login'

import About from './components/About'

import Register from './containers/Register'

import FindNavBar from './components/FindNavBar'

import MyAccountNavBar from './components/MyAccountNavBar';

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import MessageNavBar from './components/MessageNavBar'

class App extends Component {



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

                    <Route path="/account" render={() => {


                        return (

                            <MyAccountNavBar/>

                        )


                    }}/>


                </Switch>

            </Router>







        );
    }
}

export default App;
