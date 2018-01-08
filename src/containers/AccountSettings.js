import React, {Component} from 'react'

import '../myStyles.css'


import '../CustomNav.css'

import '../custom-style.css'

import {connect} from 'react-redux'

class AccountSettings extends Component {


    constructor(props) {

        super(props);

        this.state = {

            formCity: this.props.city,

            formStreet: this.props.street,

            formProvince: this.props.provinceState,

            formSkills: this.props.skills,

            formArts: this.props.iWantToMake,

            formGender: this.props.gender

        };


        this.selectProvince = this.selectProvince.bind(this);

        this.addArt = this.addArt.bind(this);

        this.addSkill = this.addSkill.bind(this);

        this.removeArt = this.removeArt.bind(this);

        this.removeSkill = this.removeSkill.bind(this);

    }

    componentDidUpdate(){

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

    removeArt(event){

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


    render() {

        console.log(this.props);


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

        for (let i = 0; i < theArts.length; i++){

            if (this.state.formArts.indexOf(theArts[i]) !== -1){

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



            <div className="container" style={{marginRight: 32, marginLeft: 32}}>

                <div className="title">Personal Info</div>

                <div className="block">


                </div>


                <form>

                    <div className="subtitle">My Profile Pic</div>

                    <div className="field">


                        <div className="columns is-desktop">

                            <div className="column">

                                <figure className="image is-square">
                                    <img src="https://bulma.io/images/placeholders/256x256.png"/>
                                </figure>


                            </div>

                            <div className="column is-hidden-mobile">


                            </div>

                            <div className="column is-hidden-mobile">


                            </div>

                            <div className="column is-hidden-mobile">


                            </div>


                        </div>

                        <button className="is-primary is-hidden-desktop is-fullwidth button">Change Profile Pic</button>

                        <button className="is-primary button is-hidden-mobile">Change Profile Pic</button>

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

                    <div className="block">


                    </div>

                    <div className="subtitle">I have the following skills...</div>

                    <div className="block">


                    </div>

                    <ul>

                        {SkillsOptionsJSX}

                    </ul>



                    <div className="block">


                    </div>

                    <div className="subtitle">I want to make a...</div>

                    <div className="block">


                    </div>

                    <ul>

                    {ArtsOptionsJSX}

                    </ul>

                </form>


            </div>






        )


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

        incorrectForm: state.registerReducer.incorrectForm

    }

}


export default connect(mapStateToProps, null)(AccountSettings)