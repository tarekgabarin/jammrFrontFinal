
const initialState = {

    password: "",

    email: "",

    myId: "",

    incorrectForm: false

};

const loginReducer = (state = initialState, action) => {

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

    return state


};

export default loginReducer;