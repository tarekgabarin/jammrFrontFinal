import React, {Component} from 'react'

import {connect} from 'react-redux'

import {register} from '../actions/index_actions'

import '../myStyles.css'

import '../custom-style.css'

import axios from 'axios'

import validator from 'validator';

import {Field, reduxForm} from 'redux-form';

import {Redirect} from 'react-router-dom';


const renderFirstName = ({input, meta}) => {

    return (

        <div className="field">
            <p className="control is-expanded">
                <input type="text" placeholder="First Name"
                       className="input" {...input}/>

            </p>

            {meta.error && meta.touched ? (

                <p className="help has-warning-text">{meta.error}</p>

            ) : (

                <p className="help" style={{visibility: 'hidden'}}>meta.error</p>

            )}

        </div>
    )

};

const renderLastName = ({input, meta}) => {

    return (

        <div className="field">
            <p className="control is-expanded">
                <input type="text" placeholder="Last Name"
                       className="input" {...input}/>

            </p>

            {meta.error && meta.touched ? (

                <p className="help has-warning-text">{meta.error}</p>

            ) : (

                <p className="help" style={{visibility: 'hidden'}}>meta.error</p>

            )}

        </div>
    )

};

const renderEmail = ({input, meta}, warning) => {

    return (

        <div className="field">
            <p className="control has-icons-left has-icons-right">
                <input className="input" type="email"
                       placeholder="Email" {...input}/>
                <span className="icon is-small is-left">
                                        <i className="fa fa-envelope"></i>
                                                                    </span>
                <span className="icon is-small is-right">
                                         <i className="fa fa-check"></i>
                                                </span>
            </p>
            {meta.error && meta.touched ? (

                <p className="help has-warning-text">{meta.error}</p>

            ) : (

                <p className="help" style={{visibility: 'hidden'}}>Hidden</p>

            )}
        </div>

    )

};

const renderPassword = ({input, meta}) => {

    return (

        <div className="field">
            <p className="control has-icons-left">
                <input className="input" type="password"
                       placeholder="Password" {...input}/>
                <span className="icon is-small is-left">
                                                         <i className="fa fa-lock"></i>
                                                    </span>
            </p>
            {meta.error && meta.touched ? (

                <p className="help has-warning-text">{meta.error}</p>

            ) : (

                <p className="help" style={{visibility: 'hidden'}}>Hidden</p>

            )}
        </div>

    )

};

const renderCity = ({input, meta}) => {

    return (



        <div className="field">

            <label className="label" htmlFor="">City</label>

            <div className="field">

                <div className="control has-icon-left">

                    <input type="text" className="input"
                           placeholder="Enter your city" {...input}/>
                </div>

            </div>

            {meta.error && meta.touched ? (

                <p className="help has-warning-text">{meta.error}</p>

            ) : (

                <p className="help" style={{visibility: 'hidden'}}>Hidden</p>

            )}

        </div>

    )

};

const renderStreet = ({input, meta}) => {

    return (

        <div className="field">

            <label className="label"> Address</label>

            <div className="control">

                <input type="text" className="input"
                       placeholder="Enter your address" {...input}/>

            </div>

            {meta.error && meta.touched ? (

                <p className="help has-warning-text">{meta.error}</p>

            ) : (

                <p className="help" style={{visibility: 'hidden'}}>meta.error</p>

            )}

        </div>

    )

};


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {

            validEmail: true,

            validLocation: true,

            isRegistered: false

        };
    }

    submitValidate(values) {

        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

        return sleep(1000).then(() => {

            const baseURL = "https://jammr-backend.herokuapp.com";

            const errorsObj = {};

            let verifyLocationPromise = () => {

                return new Promise((resolve, reject) => {

                    const emailUrl = baseURL + `/checkEmail/${values.form_email}`;

                    axios.get(emailUrl)

                        .then(response => {

                            // console.log(response);

                            if (response.data === 'EMAIL_TAKEN') {

                                errorsObj.validEmail = false;

                                resolve(errorsObj)

                            }

                            else if (response.data === 'EMAIL_AVAILABLE') {

                                errorsObj.validEmail = true;

                                resolve(errorsObj)

                            }

                        })


                })


            };

            verifyLocationPromise().then(errorsObj => {

                let verifyAddress = () => {

                    return new Promise((resolve, reject) => {

                        let inputAddress = formatStrings(values.form_address);

                        let inputCity = formatStrings(values.form_city);

                        let inputProvince = formatStrings(values.form_province);

                        let apiString = `https://maps.googleapis.com/maps/api/geocode/json?address=+${inputAddress}, +${inputCity}, +${inputProvince}, +CA&key=AIzaSyCZGDHMtmb2WAoZG1VukVSumsjz9kNGJOw`;

                        axios.get(apiString)

                            .then(response => {

                                console.log(response);

                                if (response.data["status"] === 'OK') {

                                    errorsObj.validLocation = true;

                                    resolve(errorsObj)

                                }
                                else if (response.data["status"] === 'ZERO_RESULTS') {

                                    errorsObj.validLocation = false;


                                    resolve(errorsObj)
                                }


                            })


                            .catch(err => {

                                if (err) throw err;

                            });


                    })

                };

                verifyAddress().then(errorsObj => {


                    let finalPromise = () => {


                        return new Promise((resolve, reject) => {

                            if (!errorsObj.validLocation && !errorsObj.validEmail) {

                                // console.log('this.state is...');
                                //
                                // console.log(this.state);

                                this.setState({

                                    validEmail: false,

                                    validLocation: false

                                });


                            }

                            else if (!errorsObj.validLocation && errorsObj.validEmail) {


                                this.setState({

                                    validEmail: true,

                                    validLocation: false


                                })


                            }

                            else if (errorsObj.validLocation && !errorsObj.validEmail) {

                                this.setState({

                                    validEmail: false,

                                    validLocation: true


                                })

                            }

                            else if (errorsObj.validEmail && errorsObj.validLocation) {


                                resolve(values)


                            }


                        })


                    };


                    finalPromise().then(values => {


                        this.props.onRegister(values);

                        // this.setState({isRegistered: true});


                    })
                        .catch(err => {


                            if (err) throw err;


                        })


                })


            })


        })


    };

    render() {

        // console.log("this.props is....");

        // console.log(this.props);

        if (this.props.myId !== "" && this.props.myId !== undefined && this.props.myId !== null){


            return (

                <Redirect to="/account"/>

            )


        }


        const {submitting, invalid, pristine, handleSubmit} = this.props;

        let skills_ = [

            {value: "Acting", index: 1},

            {value: "Drawing", index: 2},

            {value: "Music", index: 3},

            {value: "Writing", index: 4},

            {value: "Programming", index: 5},

            {value: "Videography", index: 6}


        ];


        let skillsOptions = skills_.map(function (vale) {

            let valeS = `${vale.value}`;


            let nameS = `form_skills[${vale.value}]`;


            return (

                <Field name={nameS} type="checkbox" component={({input, meta}) => {


                    return (

                        <div>
                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value={valeS} type="checkbox" {...input}/>
                                    {vale.value}
                                </label>
                            </li>
                            {meta.error &&
                            <p className="help form-warning">{meta.error}</p>}
                        </div>




                    )


                }
                }/>


            )

        });


        let arts_ = [

            {value: "Music", index: 1},

            {value: "Game", index: 2},

            {value: "Film", index: 3},

            {value: "Graphic Novel", index: 4},

            {value: "Youtube Channel", index: 5},

        ];

        let artsOptions = arts_.map(function (value) {

            let valeS = `${value.value}`;


            let nameS = `form_arts[${value.value}]`;


            return (

                <Field name={nameS} type="checkbox" component={({input, meta}) => {


                    return (

                        <div>
                            <li className="margin-list-item">
                                <label className="checkbox">
                                    <input value={valeS} type="checkbox" {...input}/>
                                    {value.value}
                                </label>
                            </li>
                            {meta.error &&
                            <p className="help form-warning">{meta.error}</p>}
                        </div>

                    )

                }
                }/>

            )

        });


        let ages = [];

        for (let i = 18; i < 101; i++) {

            let numString = `${i}`;

            ages.push(<option value={numString}>{i}</option>)

        }

        let locationWarning = [];


        if (this.state.validLocation === false) {

            // console.log('this.state.validLocation is...' + this.state.validLocation);

            locationWarning.push(
                <span className="has-warning-text">
                Please provide a real address within Canada
                </span>
            );

        }
        else if (this.state.validLocation === false) {

            // console.log('this.state.validLocation is...' + this.state.validLocation);

            locationWarning.push(
                <span style={{visibility: 'hidden'}}>Hidden</span>
            );

        }


        let emailWarning = [];

        if (this.state.validEmail === false) {


            // console.log('this.state.validEmail is...' + this.state.validEmail);

            emailWarning.push(
                <span className="has-warning-text">Account with email already exists</span>
            );

        }
        else if (this.state.validEmail === true) {

            emailWarning.push(
                <span style={{visibility: 'hidden'}}>Account with email already exists</span>
            );


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


                                <Field name="form_first_name" type="text"
                                       component={renderFirstName}/>

                                <Field name="form_last_name" type="text"
                                       component={renderLastName}/>


                            </div>


                        </div>

                        <div className="block">


                        </div>

                        <h1 className="subtitle">My gender is...</h1>

                        <div className="field is-horizontal">

                            <Field name="form_gender" type="radio" component={({input, meta}) => {

                                return (

                                    <div className="field-body">
                                        <div className="field is-narrow">
                                            <div className="control" {...input}>
                                                <label htmlFor="" className="radio">
                                                    <Field name="gender" component="input" type="radio" value="Male"/>
                                                    {' '}
                                                    Male
                                                </label>
                                                <label htmlFor="" className="radio">
                                                    <Field name="gender" component="input" type="radio" value="Female"/>
                                                    {' '}
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                        {meta.error && meta.touched ? (

                                            <p className="help has-warning-text">{meta.error}</p>

                                        ) : (

                                            <p className="help" style={{visibility: 'hidden'}}>meta.error</p>

                                        )}
                                    </div>


                                )


                            }}/>


                        </div>

                        <div className="block">


                        </div>

                        <h1 className="subtitle">
                            Set my email and password to...

                        </h1>

                        <div className="field is-horizontal">
                            <div className="field-body">


                                <Field name="form_email" type="email" component={renderEmail}/>

                                <Field name="form_password" type="password" component={renderPassword}/>


                            </div>


                        </div>

                        {emailWarning}


                        <div className="block"></div>

                        <h1 className="subtitle">I have the following skills...</h1>

                        <Field name="form_skills_warning" component={({input, meta}) => {

                            return (

                                <div>

                                    <ul {...input}>

                                        {skillsOptions}

                                    </ul>

                                    {meta.error && meta.touched ? (

                                        <span className="has-warning-text">{meta.error}</span>

                                    ) : (

                                        <span style={{visibility: 'hidden'}}>Hidden</span>

                                    )}


                                </div>

                            )
                        }}/>


                        <div className="block">


                        </div>

                        <h1 className="subtitle">I want to make...</h1>


                        <Field name="form_arts_warning" component={({input, meta}) => {

                            return (


                                <div>

                                    <ul {...input}>

                                        {artsOptions}


                                    </ul>


                                    {meta.error && meta.touched ? (

                                        <span className="has-warning-text">{meta.error}</span>

                                    ) : (

                                        <span style={{visibility: 'hidden'}}>Hidden</span>

                                    )}

                                </div>


                            )

                        }}/>


                        <div className="block">


                        </div>

                        <h1 className="subtitle">My age is...</h1>


                        <Field name="form_my_age" component={({input, meta}) => {

                            return (

                                <div className="select is-multiple">

                                    <select name="" id="" {...input}>
                                        {ages}

                                    </select>


                                </div>


                            )

                        }}/>


                        <div className="block">


                        </div>

                        <h1 className="subtitle">My location is.....</h1>


                        <Field name="form_city" component={renderCity}/>


                        <Field name="form_province" component={({input}) => {

                            return (

                                <div className="field">

                                    <label className="label" htmlFor="">Province</label>

                                    <div className="control">

                                        <div className="select">

                                            <select {...input}>

                                                <option value={'Ontario'}>Ontario</option>
                                                <option value="Quebec">Quebec</option>
                                                <option value="Manitoba">Manitoba</option>
                                                <option value="Saskatchewan">Saskatchewan</option>
                                                <option value="Alberta">Alberta</option>
                                                <option value="British Columbia">British Columbia</option>
                                                <option value="Yukon">Yukon</option>
                                                <option value="Northwest Territories">Northwest Territories</option>
                                                <option value="Nunavut">Nunavut</option>
                                                <option value="Newfoundland And Labrador">Newfoundland And
                                                    Labrador
                                                </option>
                                                <option value="New Brunswick">New Brunswick</option>
                                                <option value="Nova Scotia">Nova Scotia</option>
                                                <option value="Prince Edward Island">Prince Edward Island</option>

                                            </select>

                                        </div>


                                    </div>


                                </div>

                            )

                        }}/>

                        <Field name="form_address" component={renderStreet}/>


                        {locationWarning}


                        <div className="block">


                        </div>

                        {invalid || submitting || pristine ? (

                            <button type="submit" disabled className="is-info button is-fullwidth">Submit</button>

                        ) : (

                            <button type="submit" onClick={handleSubmit(data => {

                                this.submitValidate(data)


                            })} className="is-info button is-fullwidth">Submit</button>

                        )}


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


function formatStrings(str) {

    if (str !== undefined) {

        str = str.split('');

        for (let i = 0; i < str.length; i++) {

            if (str[i] === ' ') {

                str[i] = '+';

            }
        }

        return str.join('');

    }


}

function getArrayCheckBox(obj) {

    if (obj !== undefined && obj !== null) {

        // console.log('running');

        let objArr = Object.keys(obj);

        let arr = objArr.map(function (value) {

            if (obj[value] === true && obj[value] !== undefined) {

                return value;

            }

        });

        let newArr = [];

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] !== undefined) {


                newArr.push(arr[i]);

            }

        }


        return newArr

    }

}


function verifyEmail(input) {

    if (validator.isEmail(input)) {

        return true;

    }
    else {

        return false;

    }

}


function validate(values) {

    // console.log(values);


    const errors = {};

    if (!values.form_first_name) {

        errors.form_first_name = 'Field is empty'

    }

    if (!values.form_last_name) {

        errors.form_last_name = 'Field is empty'

    }

    if (!values.form_gender) {


        errors.form_gender = 'Please select a gender'

    }

    if (!values.form_email) {

        errors.form_email = 'Field is empty'

    }

    if (!values.form_password) {

        errors.form_password = "Field is empty"

    }

    if (!values.form_address) {

        errors.form_address = "Field is empty"

    }

    if (!values.form_city) {

        errors.form_city = "Field is empty"
    }


    if (values.form_gender) {

        // console.log(values)

    }

    if (values.form_province) {

        // console.log(values.form_province)

    }


    if (values.form_email) {

        if (verifyEmail(values.form_email) === false) {


            errors.form_address = "Please provide a real email"

        }


    }

    if (values.form_skills) {


        let arr = getArrayCheckBox(values.form_skills);

        // console.log('arr.length is...' + arr.length);

        if (arr.length === 0) {


            errors.form_skills_warning = "Please select at least one value";

            console.log("form_skills_warning is..." + values.form_skills_warning)

        }


    }

    if (values.form_arts) {

        let arr = getArrayCheckBox(values.form_arts);

        if (arr.length === 0) {

            errors.form_arts_warning = "Please select at least one value"

        }

    }

    return errors


}

const mapDispatchToProps = (dispatch) => {

    return {

        onRegister: (obj) => {

            console.log(obj);

            // let result_ = register(obj);
            //
            // console.log(result_);

            dispatch(register(obj));

            // console.log(dispatch(register(obj)));

        },

    }

};

function mapStateToProps(state) {

 // console.log(state);


    return {

        myId: state.registerReducer.myId

    }


}


Register = reduxForm({

    validate,


    form: 'Register',

    initialValues: {

        form_province: 'Ontario',

        form_age: 18,
    }


})(Register);

export default connect(mapStateToProps, mapDispatchToProps)(Register)
