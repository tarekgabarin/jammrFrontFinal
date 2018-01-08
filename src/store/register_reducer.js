import { initialState } from './initialState'

import axios from 'axios'

const registerReducer = (state = initialState, action) => {

    if (action.type === 'LOGIN_EMAIL'){


        return {

            ...state,

            email: action.payload,

            incorrectForm: false

        }


    }

    if (action.type === 'LOGIN_PASSWORD'){


        return {

            ...state,

            password: action.payload,

            incorrectForm: false

        }

    }

    if (action.type === 'LOGIN_FORM_INCORRECT'){

        return {

            ...state,

            incorrectForm: true


        }


    }

    if (action.type === 'LOGIN'){

        console.log('LOGIN reducer runs');


        return {

            ...state,

            incorrectForm: false,

            myId: action.payload


        }


    }

    if (action.type === "GET_MY_INFO"){

        return {

            ...state,

            firstName: action.payload.firstName,

            lastName: action.payload.lastName,

            email: action.payload.email,

            skills: action.payload.skills,

            iWantToMake: action.payload.iWantToMake,

            street: action.payload.street,

            city: action.payload.city,

            provinceState: action.payload.provinceState,

            gender: action.payload.gender,

            imLookingFor: action.payload.imLookingFor,

            isLoggedIn: true


        }



    }

    if (action.type === 'GET_PROFILE_PIC'){

        return {

            ...state,

            profilePic: action.payload,

            isLoggedIn: true


        }


    }

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

            myId: action.payload.myId,

            isLoggedIn: true,

            incorrectForm: false


        }





    }

    return state


};

export default  registerReducer;
