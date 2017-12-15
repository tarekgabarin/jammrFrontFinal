import React, {Component} from 'react'

import {Link} from 'react-router-dom'


import '../myStyles.css'

class About extends Component {

    render() {

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

                                        <Link to="/" className="navbar-item has-text-centered-mobile">
                                            Login


                                        </Link>
                                        <Link to="/about" className="navbar-item has-text-centered-mobile is-active">
                                            About
                                        </Link>


                                    </div>


                                </div>


                            </div>

                        </div>


                    </div>


                </section>

                <section className="container">

                    <div className="block">


                    </div>


                    <div className="columns">

                        <div className="column">

                            <div className="content">

                                <h1 className="title underline">About</h1>


                                <p>Imagine you are a guy (or gal) who loves programming and video games. You eagerly
                                    want to make your own video game, but you don’t have the skills to draw and create
                                    the art assets you need to make your game. No one in your group of friends are
                                    willing to help you or have the skills to help you. What do you do? </p>

                                <p>Jammr is an app that aims to connect creative people together so that they can create
                                    stuff together. Let’s take our example with the aspiring game programmer; he/she can
                                    login to the app and find other people who live nearby him/her have a certain skill.
                                    For instance, the person in the example can use the app to find a person who is
                                    skilled in drawing and who also wants to make a game. Therein, Person A and Person B
                                    can message each other, with the potential of such a correspondence blossoming into
                                    a collaborative endeavor (like making a game, as in our example).
                                </p>


                                <p>When a person signs in, they can pick the following skills that they may have. The
                                    person can then pick the following mediums of art they want to make with someone
                                    they find and meet on the app. A user can then browse for people who are looking for
                                    their skills and want to make the same thing that they want to make. They can then
                                    message these people.
                                </p>


                            </div>


                        </div>

                    </div>


                </section>

            </section>






        )


    }


}

export default About
