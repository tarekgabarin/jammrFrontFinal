import axios from 'axios'

export function register(fields) {


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


        let request = axios({

            method: 'post',

            url: "https://jammr-backend.herokuapp.com/register",

            data: {

                firstName: fields.form_first_name,

                lastName: fields.form_last_name,

                email: fields.form_email,

                password: fields.form_password,

                age: fields.form_age,

                skills: skillsArr,

                iWantToMake: artsArr,

                street: fields.form_address,

                city: fields.form_city,

                provinceState: fields.form_province,

                gender: fields.form_gender,

                imLookingFor: ['Acting', 'Drawing', 'Music', 'Writing', 'Programming', 'Videography']


            }


        });


        return request.then(response => {


                window.sessionStorage.setItem('x-auth', response.data);

                axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('x-auth');

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

