import React, {Component} from 'react'

import '../myStyles.css'


import '../CustomNav.css'

import {connect} from 'react-redux'

import AccountSettings from '../containers/AccountSettings'

import {Link} from 'react-router-dom'


class MyAccountNavBar extends Component {


    render() {

        return (

            <section>

                <nav className="navbar is-fixed-top has-text-white is-primary">

                    <div className="navbar-brand">

                        <div className="navbar-item">

                            <div className="field">

                                <div className="control">

                                    <button onClick={this.props.onBurgerClick}
                                            className="button is-primary is-secondary">

                                           <span className="has-text-white icon">

                                                <i className="fa fa-bars">


                                                </i>

                                           </span>

                                    </button>


                                </div>


                            </div>

                        </div>

                        <div className="navbar-item">


                        </div>


                        <div className="navbar-item is-active is-hidden-desktop">

                            <span className="has-text-white">My Account</span>

                        </div>

                    </div>

                    <div className="navbar-menu">


                        <div className="navbar-start">


                        </div>


                        <div className="navbar-item">

                            <span className="has-text-white">My Account</span>

                        </div>


                        <div className="navbar-end">

                        </div>
                    </div>


                </nav>

                <div id="mySidenav" className="sidenav">


                    <section className="has-danger-bg">
                        <Link to="#">


                        <span style={{marginRight: '5px'}} className="icon">
                                <i className="fa fa-user-circle">  </i>

                        </span>

                            <span> My Account</span>

                        </Link>

                    </section>

                    <section>

                        <Link to="#">


                        <span style={{marginRight: '5px'}} className="icon">
                                <i className="fa fa-sign-out">  </i>

                        </span>

                            <span> Sign Out</span>

                        </Link>

                    </section>


                    <hr style={{marginBottom: '4px', marginTop: '4px', backgroundColor: ' #666A86'}}/>

                    <section>

                        <Link to="#">


                        <span style={{marginRight: '5px'}} className="icon">
                                <i className="fa fa-users">  </i>

                        </span>

                            <span> Browse Users</span>

                        </Link>

                    </section>

                    <section>

                        <Link to="#">


                        <span style={{marginRight: '5px'}} className="icon">
                                <i className="fa fa-clock-o">  </i>

                        </span>

                            <span>My Saved Users</span>

                        </Link>

                    </section>

                    <section>

                        <Link to="#">


                        <span style={{marginRight: '5px'}} className="icon">
                                <i className="fa fa fa-comments">  </i>

                        </span>

                            <span> Message</span>

                        </Link>

                    </section>

                    <section>

                        <Link to="#">


                        <span style={{marginRight: '5px'}} className="icon">
                                <i className="fa fa-search">  </i>

                        </span>

                            <span> Search Settings</span>

                        </Link>

                    </section>

                    <section>

                        <Link to="#">


                        <span style={{marginRight: '5px'}} className="icon">
                                <i className="fa fa-address-book-o">  </i>

                        </span>

                            <span> My Contacts</span>

                        </Link>

                    </section>


                </div>

                <div onClick={this.props.onMainClick} id="main">

                    <section>

                        <AccountSettings/>

                    </section>



                </div>


            </section>



        )


    }


}

const mapDispatchtoProps = (dispatch) => {


    return {

        onBurgerClick: () => dispatch({type: 'OPEN_DRAWER'}),

        onMainClick: () => dispatch({type: 'CLOSE_DRAWER'})
    }
};

export default connect(null, mapDispatchtoProps)(MyAccountNavBar);

