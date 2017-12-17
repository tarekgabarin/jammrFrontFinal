import React, {Component} from 'react'

import {connect} from 'react-redux'

import '../myStyles.css'

import '../custom-style.css'

import axios from 'axios'

import validator from 'validator';

import {Field, reduxForm} from 'redux-form';


/*

 <Field component={(props) => {

 return (



 )

 }} />



 put this in the

 <p className="help is-danger">This email is invalid</p>




 {
 "results" : [],
 "status" : "ZERO_RESULTS"
 }


 */


// const CheckBoxSkills = ({options}) => {
//
//         options.map(function(vale){
//
//
//
//
//
//         })
//
// };



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

                    <form onSubmit={this.props.handleSubmit(values => console.log(values))}>

                        <h1 className="subtitle">My name is...</h1>

                        <div className="field is-horizontal">


                            <div className="field-body">


                                <Field name="form_first_name" type="text" validate={required}
                                       component={({input, meta}) => {

                                           return (

                                               <div className="field">
                                                   <p className="control is-expanded">
                                                       <input type="text" placeholder="First Name"
                                                              className="input" {...input}/>

                                                   </p>
                                                   {meta.touched && meta.error &&
                                                   <p className="help form-warning">{meta.error}</p>}
                                               </div>
                                           )

                                       }}/>

                                <Field name="form_last_name" type="text" validate={required}
                                       component={({input, meta}) => {

                                           return (

                                               <div className="field">
                                                   <p className="control is-expanded">
                                                       <input type="text" placeholder="Last Name"
                                                              className="input" {...input}/>
                                                       {meta.touched && meta.error &&
                                                       <p className="help form-warning">{meta.error}</p>}
                                                   </p>
                                               </div>
                                           )

                                       }}/>


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
                                            <div className="control">
                                                <label htmlFor="" className="radio">
                                                    <input type="radio" value="Male" name="gender" {...input}/>
                                                    Male
                                                </label>
                                                <label htmlFor="" className="radio">
                                                    <input type="radio" value="Female" name="gender" {...input}/>
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                        {meta.touched && meta.error &&
                                        <p className="help form-warning">{meta.error}</p>}
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


                                <Field name="form_email" type="email" component={({input, meta}) => {

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
                                            {meta.touched && meta.error &&
                                            <p className="help form-warning">{meta.error}</p>}
                                        </div>

                                    )

                                }}/>

                                <Field name="form_password" type="password" component={({input, meta}) => {

                                    return (

                                        <div className="field">
                                            <p className="control has-icons-left">
                                                <input className="input" type="password"
                                                       placeholder="Password" {...input}/>
                                                <span className="icon is-small is-left">
                                                         <i className="fa fa-lock"></i>
                                                    </span>
                                            </p>
                                            {meta.touched && meta.error &&
                                            <p className="help form-warning">{meta.error}</p>}
                                        </div>

                                    )

                                }}/>


                            </div>


                        </div>


                        <div className="block"></div>

                        <h1 className="subtitle">I have the following skills...</h1>





                        <Field name="form_skills" component={({input, meta}) => {

                            return (

                                <div>

                                    <ul>

                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Acting" type="checkbox" {...input}/>
                                                Acting
                                            </label>
                                        </li>

                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Drawing" type="checkbox" {...input}/>
                                                Drawing
                                            </label>

                                        </li>


                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Music" type="checkbox" {...input}/>
                                                Music
                                            </label>

                                        </li>


                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Writing" type="checkbox" {...input}/>
                                                Writing
                                            </label>

                                        </li>


                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Programming" type="checkbox" {...input}/>
                                                Programming
                                            </label>

                                        </li>


                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Videography" type="checkbox" {...input}/>
                                                Videography
                                            </label>


                                        </li>


                                    </ul>

                                    {meta.touched && meta.error &&
                                    <p className="help form-warning">{meta.error}</p>}


                                </div>

                            )

                        }}/>


                        <div className="block">


                        </div>

                        <h1 className="subtitle">I want to make...</h1>


                        <Field name="form_arts" component={({input, meta}) => {

                            return (


                                <div>

                                    <ul>

                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Music" type="checkbox" {...input}/>
                                                Music
                                            </label>
                                        </li>

                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Game" type="checkbox" {...input}/>
                                                Game
                                            </label>

                                        </li>


                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Film" type="checkbox" {...input}/>
                                                Film
                                            </label>

                                        </li>


                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Graphic Novel" type="checkbox" {...input}/>
                                                Graphic Novel
                                            </label>

                                        </li>


                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Youtube Channel" type="checkbox" {...input}/>
                                                Youtube Channel
                                            </label>

                                        </li>


                                        <li className="margin-list-item">
                                            <label className="checkbox">
                                                <input value="Videography" type="checkbox" {...input}/>
                                                Videography
                                            </label>


                                        </li>


                                    </ul>


                                    {meta.touched && meta.error &&
                                    <p className="help form-warning">{meta.error}</p>}
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

                                    {meta.touched && meta.error &&
                                    <p className="help form-warning">{meta.error}</p>}

                                </div>


                            )

                        }}/>


                        <div className="block">


                        </div>

                        <h1 className="subtitle">My location is.....</h1>


                        <Field name="form_city" component={({input, meta}) => {

                            return (



                                <div className="field">

                                    <label className="label" htmlFor="">City</label>

                                    <div className="field">

                                        <div className="control has-icon-left">

                                            <input type="text" className="input"
                                                   placeholder="Enter your city" {...input}/>
                                        </div>

                                    </div>

                                    {meta.touched && meta.error &&
                                    <p className="help form-warning">{meta.error}</p>}

                                </div>

                            )

                        }}/>


                        <Field name="form_province" component={({input, meta}) => {

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

                                    {meta.touched && meta.error &&
                                    <p className="help form-warning">{meta.error}</p>}


                                </div>

                            )

                        }}/>

                        <Field name="form_address" component={({input, meta}) => {

                            return (

                                <div className="field">

                                    <label className="label"> Address</label>

                                    <div className="control">

                                        <input type="text" className="input"
                                               placeholder="Enter your address" {...input}/>

                                    </div>

                                    {meta.touched && meta.error &&
                                    <p className="help form-warning">{meta.error}</p>}

                                </div>

                            )

                        }}/>


                        <div className="block">


                        </div>

                        <button type="submit" className="is-info button is-fullwidth">Submit</button>

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

function formatStrings(str) {

    // console.log(str)

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

function verifyCityOrAddress(input){

    input = formatStrings(input);

    const apiString =  `https://maps.googleapis.com/maps/api/geocode/json?address=+${input}, +CA&key=AIzaSyCZGDHMtmb2WAoZG1VukVSumsjz9kNGJOw`;

    return axios.get(apiString)

        .then(response => {

                if (response.data.status === 'OK'){

                    return 'OK'

                }
                else if (response.data.status === 'ZERO_RESULTS'){


                    return 'ZERO_RESULTS'
                }


                })


        .catch(err => {

            if (err) throw err;

        })

}

function verifyEmail(input){

    if (validator.isEmail(input)){

        return true;

    }
    else {

        return false;

    }

}



function validate(values) {

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

    if (!values.form_city) {

        errors.form_city = "Field is empty"
    }

    if (values.form_city){

        if (verifyCityOrAddress(values.form_city) === 'ZERO_RESULTS'){

            errors.form_city = "Please provide a real Canadian city"

        }


    }

    if (values.form_address){

        if (verifyCityOrAddress(values.form_address) === 'ZERO_RESULTS' && values.form_address !== undefined){

            errors.form_address = "Please provide a real address within Canada"

        }


    }

    if (values.form_email){

        if (verifyEmail(values.form_email) === false){


            errors.form_address = "Please provide a real email"

        }


    }

    if (values.form_skills){


        console.log(values)


    }









    return errors;

}

Register = reduxForm({

    validate,

    form: 'register'

})(Register);

export default Register;
