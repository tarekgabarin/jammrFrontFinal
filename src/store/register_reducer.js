import { initialState } from './initialState'

import axios from 'axios'

const registerReducer = (state = initialState, action) => {

    if (action.type === 'REGISTER'){


        // console.log('REGISTER RUNS');
        //
        console.log("action.payload is...");

        console.log(action.payload);

        // let objArrSkills = Object.keys(action.payload.form_skills);
        //
        // let skillsArr = objArrSkills.map(function (value) {
        //
        //     if (action.payload.form_skills[value] === true && action.payload.form_skills[value] !== undefined) {
        //
        //         return value;
        //
        //     }
        //
        // });
        //
        // let objArrArts = Object.keys(action.payload.form_arts);
        //
        // let artsArr = objArrArts.map(function (value) {
        //
        //     if (action.payload.form_arts[value] === true && action.payload.form_arts[value] !== undefined) {
        //
        //         return value;
        //
        //     }
        //
        // });

        // console.log('artsArr is...' + artsArr);
        //
        // console.log("skillsArr is..." + skillsArr);

       /// console.log('action.payload.form_skills...' + action.payload.form_skills );

        // console.log('action.payload.form_first_name' + action.payload.form_first_name);
        //
        // console.log("actions.payload.form_gender is..." + action.payload.form_gender);


        //TODO you are supposed to do API calls in actions not reducers

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



        // axios({
        //
        //     method: 'post',
        //
        //     url: "https://jammr-backend.herokuapp.com/register",
        //
        //     data: {
        //
        //         firstName: action.payload.form_first_name,
        //
        //         lastName: action.payload.form_last_name,
        //
        //         email: action.payload.form_email,
        //
        //         password: action.payload.form_password,
        //
        //         skills: skillsArr,
        //
        //         iWantToMake: artsArr,
        //
        //         street: action.payload.form_address,
        //
        //         city: action.payload.form_city,
        //
        //         provinceState: action.payload.form_province,
        //
        //         gender: action.payload.form_gender,
        //
        //         imLookingFor: ['Acting', 'Drawing', 'Music', 'Writing', 'Programming', 'Videography']
        //
        //
        //     },
        //
        //     headers: {
        //
        //         'Access-Control-Allow-Origin': '*'
        //
        //     }
        //
        //
        // }).then(response => {
        //
        //     console.log('response from axios post is...');
        //     //
        //     console.log(response.data);
        //
        //
        // });



        // axios.post("https://jammr-backend.herokuapp.com/register",
        //
        //     {
        //
        //     firstName: action.payload.form_first_name,
        //
        //     lastName: action.payload.form_last_name,
        //
        //     email: action.payload.form_email,
        //
        //     password: action.payload.form_password,
        //
        //     skills: skillsArr,
        //
        //     iWantToMake: artsArr,
        //
        //     street: action.payload.form_address,
        //
        //     city: action.payload.form_city,
        //
        //     provinceState: action.payload.form_province,
        //
        //     gender: action.payload.form_gender,
        //
        //     imLookingFor: ['Acting', 'Drawing', 'Music', 'Writing', 'Programming', 'Videography']
        //
        //
        //     }).then(response => {
        //
        //         console.log('response from axios post is...');
        //         //
        //         console.log(response.data);
        //
        //         return {
        //
        //             ...state,
        //
        //             myId: response.data
        //
        //             }
        //
        //         // return {
        //         //
        //         //     ...state,
        //         //
        //         //     iWantToMake: response.data.iWantToMake,
        //         //
        //         //     imLookingFor: response.data.imLookingFor,
        //         //
        //         //     city: response.data.city,
        //         //
        //         //     street: response.data.street,
        //         //
        //         //     gender: response.data.gender,
        //         //
        //         //     age: response.data.age,
        //         //
        //         //     myCD: response.data.creationDate,
        //         //
        //         //     myId: response.data._id
        //         //
        //         // }
        //
        //     })


    }

    return state


};

export default  registerReducer;
