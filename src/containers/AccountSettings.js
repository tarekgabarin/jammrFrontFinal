import React, {Component, PropTypes} from 'react'

import '../myStyles.css'

import RaisedButton from 'material-ui/RaisedButton';

import '../CustomNav.css'

import '../custom-style.css'

import {connect} from 'react-redux'

import axios from 'axios'



import Dialog from 'material-ui/Dialog';

class AccountSettings extends Component {


    constructor(props) {

        super(props);

        this.state = {

            formCity: this.props.city,

            formStreet: this.props.street,

            formProvince: this.props.provinceState,

            formSkills: this.props.skills,

            formArts: this.props.iWantToMake,

            formGender: this.props.gender,

            profilePic: this.props.profilePic,

            formTouched: false,

            validLocation: true,

            isShowingModal: false,

        };

        // this.handleOpen = this.handleOpen.bind(this);
        //
        // this.handleClose = this.handleClose.bind(this);


        this.imageName = require(this.state.profilePic);


        this.selectProvince = this.selectProvince.bind(this);

        this.addArt = this.addArt.bind(this);

        this.addSkill = this.addSkill.bind(this);

        this.removeArt = this.removeArt.bind(this);

        this.removeSkill = this.removeSkill.bind(this);

        this.handleClick = this.handleClick.bind(this);

        this.handleClose = this.handleClose.bind(this)


    }

    handleClick = () => this.setState({isShowingModal: true});


    handleClose = () => this.setState({isShowingModal: false});


    // handleOpen = () => {
    //
    //     this.setState({open: true});
    // };
    //
    // handleClose = () => {
    //
    //
    //     this.setState({open: false});
    // };



    componentDidUpdate() {

        console.log('Component has updated');

        console.log(this.state)

    }

    selectProvince(event) {

        let value_ = event.target.value;

        this.setState({formProvince: value_});


    }

    addArt(event) {

        let lst = this.state.formArts;

        let value = event.target.value;


        if (lst.indexOf(value) === -1) {

            lst.push(value);

        }

        lst = lst.sort();

        this.setState({formArts: lst});

    }

    removeArt(event) {

        console.log(this);

        let lst = this.state.formArts;

        let value = event.target.value;

        let getIndex = () => {

            let index_;

            return new Promise((resolve, reject) => {


                for (let i = 0; i < lst.length; i++) {

                    if (lst[i] === value) {

                        index_ = i

                    }
                }

                if (index_ !== undefined) {

                    resolve(index_)

                }
                else {

                    reject('getIndex promise function not working at line 316');

                }

            })
        };

        getIndex().then(index_ => {

            lst.splice(index_, 1);

            this.setState({formArts: lst});

        });


    }

    addSkill(event) {

        let lst = this.state.formSkills;

        let value = event.target.value;

        if (lst.indexOf(value) === -1) {

            lst.push(value);

        }

        lst = lst.sort();

        this.setState({formSkills: lst});

    }

    removeSkill(event) {

        let lst = this.state.formSkills;

        let value = event.target.value;


        let getIndex = () => {

            let index_;

            return new Promise((resolve, reject) => {


                for (let i = 0; i < lst.length; i++) {

                    if (lst[i] === value) {

                        index_ = i

                    }
                }

                if (index_ !== undefined) {

                    resolve(index_)

                }
                else {

                    reject('getIndex promise function not working at line 316');

                }

            })
        };

        getIndex().then(index_ => {

            lst.splice(index_, 1);

            this.setState({formSkills: lst});

        });


    }

    submitValidate() {

        this.setState({formTouched: true});

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

        let inputAddress = formatStrings(this.state.formStreet);

        let inputCity = formatStrings(this.state.formCity);

        let inputProvince = formatStrings(this.state.formProvince);

        let apiString = `https://maps.googleapis.com/maps/api/geocode/json?address=+${inputAddress}, +${inputCity}, +${inputProvince}, +CA&key=AIzaSyCZGDHMtmb2WAoZG1VukVSumsjz9kNGJOw`;

        axios.get(apiString)

            .then(response => {

                console.log(response);

                if (response.data["status"] === 'OK') {

                    this.setState({validLocation: true})

                }
                else if (response.data["status"] === 'ZERO_RESULTS') {

                    this.setState({validLocation: false})
                }


            })


            .catch(err => {

                if (err) throw err;

            });


        let saveChanges = () => {

            return new Promise((resolve, reject) => {

                if (this.state.validLocation && (this.state.formSkills.length !== 0) && (this.state.formArts.length !== 0)) {

                    resolve()

                }


            })


        };

        saveChanges().then(() => {

            axios({

                method: 'put',

                url: "https://jammr-backend.herokuapp.com/update",

                data: {

                    iWantToMake: this.state.formArts,

                    skills: this.state.formSkills,

                    city: this.state.formCity,

                    street: this.state.formStreet,

                    provinceState: this.state.formProvince

                }


            }).then(response => {


                this.props.onUpdateUser(response.data)


            })


        })

    }


    render() {

        const buttonStyle = {

            backgroundColor: '#273043',

            borderRadius: 0


        };


        console.log(this.props);

        console.log(this.state.open);


        let provinces_ = ['Ontario', 'Quebec', 'Manitoba', "Saskatchewan", "Alberta", "British Columbia", "Yukon", "Northwest Territories", "Nunavut", "Newfoundland And Labrador", "New Brunswick", "Nova Scotia", "Prince Edward Island"];

        let provincesJSX = provinces_.map((value) => {

            let valueString = `${value}`;

            if (valueString === this.state.formProvince) {

                return (

                    <option value={valueString} selected>{valueString}</option>

                )

            }
            else {

                return (

                    <option value={valueString}>{valueString}</option>

                )


            }


        });

        console.log('this.state.theCity is...' + this.state.formCity);

        console.log('this.props.city is...' + this.props.city);


        let cityString = `${this.state.formCity}`;

        let streetString = `${this.state.formStreet}`;

        let theSkills = ['Acting', 'Drawing', 'Music', 'Writing', 'Programming', 'Videography'].sort();

        let theArts = ['Music', 'Game', 'Film', 'Graphic Novel', 'Youtube Channel'].sort();

        let SkillsOptionsJSX = [];

        let ArtsOptionsJSX = [];

        for (let i = 0; i < theSkills.length; i++) {


            if (this.state.formSkills.indexOf(theSkills[i]) !== -1) {

                SkillsOptionsJSX.push(
                    <li>

                        <label className="checkbox">
                            <input value={theSkills[i]}

                                   onChange={(e) => this.addSkill(e)}

                                   type="checkbox" defaultChecked/>
                            {theSkills[i]}
                        </label>
                    </li>
                )

            }
            else {

                SkillsOptionsJSX.push(
                    <li>
                        <label className="checkbox">
                            <input value={theSkills[i]}

                                   onChange={(e) => this.removeSkill(e)}

                                   type="checkbox"/>
                            {theSkills[i]}
                        </label>
                    </li>
                )

            }

        }

        for (let i = 0; i < theArts.length; i++) {

            if (this.state.formArts.indexOf(theArts[i]) !== -1) {

                ArtsOptionsJSX.push(
                    <li>

                        <label className="checkbox">
                            <input value={theArts[i]}

                                   onClick={(e) => this.removeArt(e)}

                                   type="checkbox" defaultChecked/>
                            {theArts[i]}
                        </label>
                    </li>
                )

            }
            else {

                ArtsOptionsJSX.push(
                    <li>
                        <label className="checkbox">
                            <input value={theArts[i]}

                                   onClick={(e) => this.addArt(e)}

                                   type="checkbox"/>
                            {theArts[i]}
                        </label>

                    </li>
                )


            }

        }




        return (

            <section>


            <div className="container" style={{marginRight: 32, marginLeft: 32}}>

                <Dialog
                    title="Dialog With Date Picker"

                    modal={false}
                    open={this.state.isShowingModal}
                    onRequestClose={this.handleClose}
                >
                    Open a Date Picker dialog from within a dialog.

                </Dialog>


                <div className="title">Personal Info</div>

                <div className="block">


                </div>


                <form>

                    <div className="subtitle">My Profile Pic</div>

                    <div className="field">


                        <div className="columns is-desktop">

                            <div className="column">

                                <figure className="image is-square">
                                    <img src={this.imageName}/>
                                </figure>


                            </div>

                            <div className="column is-hidden-mobile">


                            </div>

                            <div className="column is-hidden-mobile">


                            </div>

                            <div className="column is-hidden-mobile">


                            </div>


                        </div>

                        <RaisedButton label="Change Profile Pic" disableTouchRipple="true" style={buttonStyle} onClick={this.handleClick} />


                    </div>


                    <div className="block">

                    </div>

                    <div className="subtitle">My Location</div>

                    <div className="block"></div>

                    <div className="field">
                        <label className="label">City</label>
                        <div className="control">

                            <input className="input" name="city" type="text" id="city" value={cityString}
                                   onFocus={() => {

                                       let city_ = document.getElementById('city');

                                       if (city_.value === this.props.city) {

                                           city_.value = ''

                                       }


                                   }}/>


                        </div>
                    </div>

                    <div className="field">

                        <label className="label" htmlFor="">Province</label>

                        <div className="control">

                            <div className="select">

                                <select >

                                    {provincesJSX}

                                </select>

                            </div>


                        </div>

                    </div>

                    <div className="field">

                        <label htmlFor="" className="label">Address</label>

                        <div className="control">

                            <input type="text" name="street" id="street" value={streetString} className="input"

                                   onFocus={() => {

                                       let street_ = document.getElementById('street');

                                       street_.value = "";

                                   }}

                            />


                        </div>


                    </div>

                    {
                        (this.state.formTouched && !this.state.validLocation) ?
                            <span className="has-warning-text">Please provide a real address</span> :
                            <span style={{visibility: "hidden"}}>Hidden</span>


                    }

                    <div className="block">


                    </div>

                    <div className="subtitle">I have the following skills...</div>

                    <div className="block">


                    </div>

                    <ul>

                        {SkillsOptionsJSX}

                    </ul>

                    {
                        (this.state.formTouched && (this.state.formSkills.length === 0)) ?
                            <span className="has-warning-text">Please select at least one value</span> :
                            <span style={{visibility: "hidden"}}>Hidden</span>


                    }


                    <div className="block">


                    </div>

                    <div className="subtitle">I want to make a...</div>

                    <div className="block">


                    </div>

                    <ul>

                        {ArtsOptionsJSX}

                    </ul>


                    {
                        (this.state.formTouched && (this.state.formArts.length === 0)) ?
                            <span className="has-warning-text">Please select at least one value</span> :
                            <span style={{visibility: "hidden"}}>Hidden</span>


                    }

                </form>

                <div className="block">


                </div>

                <div className="field">
                    <p className="control">
                        <button onClick={this.submitValidate} className="button is-fullwidth is-primary">
                            Save changes
                        </button>
                    </p>
                </div>

                <div className="field">
                    <p className="control">
                        <p className="control">
                            <button className="button is-fullwidth is-secondary">
                                Reset
                            </button>
                        </p>
                    </p>

                </div>

                <div className="block">


                </div>


            </div>

            </section>






        )


    }


}

function mapDispatchToProps(dispatch) {

    return {

        onUpdateUser: (userObj) => {

            dispatch({

                type: 'UPDATE_USER_INFO',

                payload: userObj


            })


        }


    }


}

function mapStateToProps(state) {

    return {

        skills: state.registerReducer.skills,

        iWantToMake: state.registerReducer.iWantToMake,

        city: state.registerReducer.city,

        provinceState: state.registerReducer.provinceState,

        street: state.registerReducer.street,

        gender: state.registerReducer.gender,

        incorrectForm: state.registerReducer.incorrectForm,

        profilePic: state.registerReducer.profilePic

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings)