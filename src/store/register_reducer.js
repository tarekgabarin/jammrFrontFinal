import { initialState } from './initialState'

import axios from 'axios'

const registerReducer = (state = initialState, action) => {

    if (action.type === 'REGISTER'){


        // console.log('REGISTER RUNS');
        //
        console.log("action.payload is...");

        console.log(action.payload);


        return {

            ...state,

            firstName: action.payload.fields.form_first_name,

            lastName: action.payload.fields.form_last_name,

            email: action.payload.fields.form_email,

            password: action.payload.fields.form_password,

            skills: action.payload.skills,

            iWantToMake: action.payload.iWantToMake,

            street: action.payload.fields.form_address,

            city: action.payload.fields.form_city,

            provinceState: action.payload.fields.form_province,

            gender: action.payload.fields.form_gender,

            imLookingFor: ['Acting', 'Drawing', 'Music', 'Writing', 'Programming', 'Videography'],

            myId: action.payload.myId


        }





    }

    return state


};

export default  registerReducer;
