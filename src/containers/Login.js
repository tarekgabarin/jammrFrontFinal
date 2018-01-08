import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import validator from 'validator'

import axios from 'axios'

import {Redirect} from 'react-router-dom';


import '../myStyles.css'

import '../custom-style.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

            validEmail: true,

            validPassword: true,

        };
    }

    loginValidation(email, password) {

        console.log('In loginValidation, email is....' + email);

        console.log('In loginValidation, password is....' + password);

        let verifyEmail = () => {

            return new Promise((resolve, reject) => {

                const baseURL = "https://jammr-backend.herokuapp.com";

                const emailUrl = baseURL + `/checkEmail/${email}`;

                axios.get(emailUrl)

                    .then(response => {

                        // console.log(response);

                        if (response.data === 'EMAIL_TAKEN') {

                            let isValidEmail = true;

                            resolve(isValidEmail);

                        }

                        else if (response.data === 'EMAIL_AVAILABLE') {

                            let isValidEmail = false;

                            resolve(isValidEmail);

                        }

                    })


            })


        };

        verifyEmail().then((isValidEmail) => {


            console.log('password is...' + password);

            console.log('email is...' + email);


            console.log("Witin then callback, isValidEmail is..." + isValidEmail);

            if (isValidEmail === true) {


                let verifyPassword = () => {

                    return new Promise((resolve, reject) => {

                        axios({

                            method: 'post',

                            url: "https://jammr-backend.herokuapp.com/checkPassword",

                            data: {

                                password,

                                email
                            }

                        })
                            .then(response => {

                                if (response.data === 'INCORRECT_PASSWORD') {

                                    this.setState({

                                        validPassword: false,

                                        validEmail: isValidEmail

                                    });

                                }

                                else if (response.data === "CORRECT_PASSWORD") {

                                    resolve();


                                }


                            })


                    })


                };


                verifyPassword().then(() => {

                    this.props.onLogin(password, email)


                })


            }
            else {

                this.setState({validEmail: false})

            }


        })


    }


    render() {

        if (this.props.isLoggedIn === true) {


            return (

                <Redirect to="/account"/>

            )


        }

        console.log(this.props);

        let warningJSX = [];

        if (this.state.validEmail && this.state.validPassword) {

            warningJSX.push(<span className="has-warning-text" style={{visibility: 'hidden'}}>Hidden</span>)


        }
        else if (!this.state.validEmail) {

            warningJSX.push(<span className="has-warning-text">There is no account registered with that email</span>)

        }

        else if (this.state.validEmail && !this.state.validPassword) {

            warningJSX.push(<span className="has-warning-text">Incorrect password</span>)

        }


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
                                    <span className="icon is-small is-right">
                                         <i className="fa fa-check"></i>
                                                </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input onChange={(e) => {

                                        this.props.handlePasswordInput(e)

                                    }} className="input" type="password" placeholder="Password"/>
                                    <span className="icon is-small is-left">
                                                         <i className="fa fa-lock"></i>
                                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control">
                                    <button onClick={() => {

                                        this.loginValidation(this.props.email, this.props.password);


                                    }} className="button is-fullwidth is-success">
                                        Login
                                    </button>
                                </p>
                            </div>


                            <div className="block">

                                {warningJSX}

                            </div>


                            <div className="block">

                                <Link to="/register">Don't have an account? Register to create your own!</Link>

                            </div>


                        </div>

                        <div className="column is-one-quarter">


                        </div>


                    </div>


                </div>


            </section>




        )


    }


}

let mapStateToProps = (state) => {

    console.log('state in mapStateToProps is....');

    console.log(state.loginReducer);

    return {

        password: state.loginReducer.password,

        email: state.loginReducer.email,

        myId: state.loginReducer.myId,

       isLoggedIn: state.registerReducer.isLoggedIn

    };


};

const mapDispatchToProps = (dispatch) => {


    return {

        handleEmailInput: (event) => {

            let result = validator.isEmail(event.target.value);


            if (result) {


                dispatch({type: 'LOGIN_EMAIL', payload: event.target.value});


            }
            else {

                dispatch({type: 'LOGIN_FORM_INCORRECT'})

            }


        },

        handlePasswordInput: (event) => {

            dispatch({type: 'LOGIN_PASSWORD', payload: event.target.value})


        },

        onLogin: (password, email) => {


            axios({

                method: 'post',

                url: "https://jammr-backend.herokuapp.com/login",

                data: {

                    password: password,


                    email: email


                }


            }).then(response => {

                console.log('callback for onLogin runs');


                window.sessionStorage.setItem('x-auth', response.data);

                axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('x-auth');

                dispatch({

                    type: 'LOGIN',

                    payload: response.data


                });

                axios({

                    method: 'get',

                    url: "https://jammr-backend.herokuapp.com/getMyInfo"


                }).then(res => {

                    dispatch({

                        type: 'GET_MY_INFO',

                        payload: res.data

                    })

                    



                })


            });


        }

    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
