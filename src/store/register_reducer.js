import { initialState } from './initialState'

const registerReducer = (state = initialState, action) => {

    if (action.type === 'REGISTER'){


        console.log('REGISTER RUNS');

        console.log("action.payload is..." + action.payload);

        console.log('action.payload.form_skills...' + action.payload.form_skills );

    }


    return state


};

export default  registerReducer;
