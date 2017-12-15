import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import validator from 'validator'

import '../myStyles.css'

import '../custom-style.css'

class Login extends Component {


    componentDidUpdate(){

        console.log('did it update?')


    }


    render(){


        return (

            <section>
            <section className="hero is-primary is-large">

                <div className="hero-head">

                    <div className="navbar">

                        <div className="container">

                            <div className="navbar-brand">

                                <div className="navbar-item">

                                    <h1 className="subtitle is-1">

                                        Jammr

                                    </h1>


                                </div>

                            </div>

                            <div className="navbar-menu is-active">


                                <div className="navbar-end">

                                    <Link to="/" className="navbar-item has-text-centered-mobile is-active">
                                        Login



                                    </Link>
                                    <Link to="/about" className="navbar-item has-text-centered-mobile">
                                        About
                                    </Link>



                                </div>


                            </div>

                        </div>

                    </div>


                </div>

            </section>

                <div className="container">

                    <div className="block">


                    </div>

                    <div className="columns">

                        <div className="column">

                            <div className="block">

                            </div>

                        </div>

                    </div>

                    <div className="columns">

                        <div className="column is-one-quarter">


                        </div>



                        <div className="column">



                                    <div className="has-text-centered title underline">Login</div>


                                    <div className="field">
                                        <p className="control has-icons-left has-icons-right">
                                            <input onChange={(e) => {

                                                this.props.handleEmailInput(e);


                                            }

                                            } className="input" type="email" placeholder="Email"/>
                                                <span className="icon is-small is-left">
                                        <i className="fa fa-envelope"></i>
                                                                    </span>
                                                <span class="icon is-small is-right">
                                         <i className="fa fa-check"></i>
                                                </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="password" placeholder="Password"/>
                             <span className="icon is-small is-left">
                                                         <i className="fa fa-lock"></i>
                                                    </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <p className="control">
                                            <button className="button is-fullwidth is-success">
                                                Login
                                            </button>
                                        </p>
                                    </div>

                            <Link to="/register" >Don't have an account? Register to create your own!</Link>


                        </div>

                        <div className="column is-one-quarter">


                        </div>



                    </div>


                </div>


            </section>




        )




    }


}

const mapDispatchToProps = (dispatch) => {


    return {

        handleEmailInput: (event) => {

            let result = validator.isEmail(event.target.value);

            console.log('result is...' + result)

            console.log('event.target.value is..' + event.target.value);

            if (result) {


                dispatch({type: 'LOGIN_EMAIL', payload: event.target.value});


            }
            else {

                dispatch({type: 'LOGIN_FORM_INCORRECT'})

            }


        }

    }

}

export default connect(null, mapDispatchToProps)(Login)
