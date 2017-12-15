import React, {Component} from 'react'

import {connect} from 'react-redux'

import '../myStyles.css'

import '../custom-style.css'

class Register extends Component {

    render() {

        let ages = [];

        for (let i = 18; i < 101; i++) {

            let numString = `${i}`;

            ages.push(<option value={numString}>{i}</option>)

        }

        return (

            <section>

                <section className="hero is-primary">

                    <div className="hero-body">
                        <div className="contai1ner">
                            <h1 className="title">
                                Register
                            </h1>

                        </div>
                    </div>

                </section>

                <section className="container">


                    <div className="block">


                    </div>

                    <form>

                        <h1 className="subtitle">My name is...</h1>

                        <div className="field is-horizontal">

                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded">
                                        <input type="text" placeholder="First Name" className="input"/>

                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control is-expanded">
                                        <input type="text" placeholder="Last Name" className="input"/>

                                    </p>
                                </div>


                            </div>


                        </div>

                        <div className="block">


                        </div>

                        <h1 className="subtitle">My gender is...</h1>

                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field is-narrow">
                                    <div className="control">
                                        <label htmlFor="" className="radio">
                                            <input type="radio" value="Male" name="gender"/>
                                            Male
                                        </label>
                                        <label htmlFor="" className="radio">
                                            <input type="radio" value="Female" name="gender"/>
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block">


                        </div>

                        <h1 className="subtitle">
                            Set my email and password to...

                        </h1>

                        <div className="field is-horizontal">
                            <div className="field-body">

                                <div className="field">
                                    <p className="control has-icons-left has-icons-right">
                                        <input className="input" type="email" placeholder="Email"/>
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

                            </div>


                        </div>


                        <div className="block"></div>

                        <h1 className="subtitle">I have the following skills...</h1>

                        <ul>

                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Acting" type="checkbox"/>
                                    Acting
                                </label>
                            </li>

                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Drawing" type="checkbox"/>
                                    Drawing
                                </label>

                            </li>


                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Music" type="checkbox"/>
                                    Music
                                </label>

                            </li>


                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Writing" type="checkbox"/>
                                    Writing
                                </label>

                            </li>


                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Programming" type="checkbox"/>
                                    Programming
                                </label>

                            </li>


                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Videography" type="checkbox"/>
                                    Videography
                                </label>


                            </li>


                        </ul>


                        <div className="block">


                        </div>

                        <h1 className="subtitle">I want to make...</h1>

                        <ul>

                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Music" type="checkbox"/>
                                    Music
                                </label>
                            </li>

                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Game" type="checkbox"/>
                                    Game
                                </label>

                            </li>


                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Film" type="checkbox"/>
                                    Film
                                </label>

                            </li>


                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Graphic Novel" type="checkbox"/>
                                    Graphic Novel
                                </label>

                            </li>


                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Youtube Channel" type="checkbox"/>
                                    Youtube Channel
                                </label>

                            </li>


                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value="Videography" type="checkbox"/>
                                    Videography
                                </label>


                            </li>


                        </ul>

                        <div className="block">


                        </div>

                        <h1 className="subtitle">My age is...</h1>

                        <div className="select is-multiple">

                            <select name="" id="">
                                {ages}

                            </select>

                        </div>

                        <div className="block">


                        </div>

                        <h1 className="subtitle">My location is.....</h1>

                        <div className="field">

                            <label className="label" htmlFor="">City</label>

                            <div className="field">

                                <div className="control has-icon-left">

                                    <input type="text" className="input" placeholder="Enter your city"/>
                                </div>

                            </div>

                        </div>

                        <div className="field">

                            <label className="label" htmlFor="">Province</label>

                            <div className="control">

                                <div className="select">

                                    <select>

                                    <option value={'Ontario'}>Ontario</option>
                                    <option value="Quebec">Quebec</option>
                                    <option value="Manitoba">Manitoba</option>
                                    <option value="Saskatchewan">Saskatchewan</option>
                                    <option value="Alberta">Alberta</option>
                                    <option value="British Columbia">British Columbia</option>
                                    <option value="Yukon">Yukon</option>
                                    <option value="Northwest Territories">Northwest Territories</option>
                                    <option value="Nunavut">Nunavut</option>
                                    <option value="Newfoundland And Labrador">Newfoundland And Labrador</option>
                                    <option value="New Brunswick">New Brunswick</option>
                                    <option value="Nova Scotia">Nova Scotia</option>
                                    <option value="Prince Edward Island">Prince Edward Island</option>

                                    </select>

                                </div>


                            </div>


                        </div>

                        <div className="field">

                            <label className="label"> Address</label>

                            <div className="control">

                                <input type="text" className="input" placeholder="Enter your address"/>

                            </div>

                        </div>


                        <div className="block">


                        </div>

                        <button className="is-info button is-fullwidth">Submit</button>

                        <div className="block">


                        </div>

                        <div className="block">



                        </div>


                    </form>


                </section>

            </section>




        )


    }

}

/// Maybe put this in the change user component

// const mapStateToProps = (state) => {
//
//     return {
//
//         country: state.country,
//
//         firstName: state.firstName,
//
//         lastName: state.lastName,
//
//         iWantToMake: state.iWantToMake,
//
//         skills: state.skills,
//
//         age: state.age,
//
//         street: state.street,
//
//         city: state.city,
//
//         email: state.email,
//
//         password: state.email
//
//     }
//
//
// }

export default connect()(Register);
