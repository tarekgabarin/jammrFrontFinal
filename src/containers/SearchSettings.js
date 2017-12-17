import React, {Component} from 'react'

import Slider from 'material-ui/Slider';

import { Field, reduxForm } from 'redux-form';


class SearchSettings extends Component {

    render(){

        return (

            <section>

                    <Field name="search_miles" component={(props) => {


                        const { input: { value, onChange } } = this.props


                    }} />


            </section>


        )


    }

}
