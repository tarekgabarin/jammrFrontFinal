import axios from 'axios'

export function register(fields) {

    console.log('below are the fields');

    console.log(fields);


    return function action(dispatch) {

        let objArrSkills = Object.keys(fields.form_skills);

        let skillsArr = objArrSkills.map(function (value) {

            if (fields.form_skills[value] === true && fields.form_skills[value] !== undefined) {

                return value;

            }

        });

        let objArrArts = Object.keys(fields.form_arts);

        let artsArr = objArrArts.map(function (value) {

            if (fields.form_arts[value] === true && fields.form_arts[value] !== undefined) {

                return value;

            }


        });

        console.log('artsArr is...' + artsArr);

        console.log('skillsArs is...' + skillsArr);


        const request = axios({

            method: 'post',

            url: "https://jammr-backend.herokuapp.com/register",

            data: {

                firstName: fields.form_first_name,

                lastName: fields.form_last_name,

                email: fields.form_email,

                password: fields.form_password,

                skills: skillsArr,

                iWantToMake: artsArr,

                street: fields.form_address,

                city: fields.form_city,

                provinceState: fields.form_province,

                gender: fields.form_gender,

                imLookingFor: ['Acting', 'Drawing', 'Music', 'Writing', 'Programming', 'Videography']


            },

            headers: {

                'Content-Type': 'application/x-www-form-urlencoded',

                'Access-Control-Allow-Origin': '*',

                'Access-Control-Allow-Headers':   "Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Origin,X-Auth,X-Requested-With,Content-Type,Accept,content-type,application/json,x-auth,Access-Control-Request-Method,Access-Control-Request-Headers",

                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'

            }


        });


        return request.then(response => {

                console.log('axios call ran! Below is response....');

                console.log(response);

                dispatch({

                    type: 'REGISTER',

                    payload: {

                        myId: response.data,

                        fields: fields,

                        skills: skillsArr,

                        iWantToMake: artsArr

                    }

                })


            },
            err => {

                if (err) throw err;

            })


    }
};