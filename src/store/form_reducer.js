import {initialState} from './initialState'

const formReducer = (state = initialState, action) => {

    if (action.type === 'SET_MY_AGE'){

        return {

            ...state,

            age: action.payload

        }

    }

    return state


};

export default formReducer
