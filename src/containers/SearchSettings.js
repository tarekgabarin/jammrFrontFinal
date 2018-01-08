import React, {Component} from 'react'

import Slider from 'material-ui/Slider';

import { Field, reduxForm } from 'redux-form';


class SearchSettings extends Component {

    render(){

        let theArts = ['Music', 'Game', 'Film', 'Graphic Novel', 'Youtube Channel'].sort();

        let ArtsOptionsJSX = [];

        for (let i = 0; i < theArts.length; i++){

            if (this.state.formArts.indexOf(theArts[i]) !== -1){

                ArtsOptionsJSX.push(

                    <li>

                        <label className="checkbox">
                            <input value={theArts[i]}

                                   onChange={(e) => this.addArt(e)}

                                   type="checkbox"/>
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

                                   onChange={(e) => this.removeArt(e)}

                                   type="checkbox" checked/>
                            {theArts[i]}
                        </label>

                    </li>


                )


            }

        }

        return (

            <section>

                    <Field name="search_miles" component={(props) => {


                        const { input: { value, onChange } } = this.props


                    }} />




            </section>


        )


    }

}
