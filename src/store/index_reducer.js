import {combineReducers} from 'redux'

import drawerReducer from './drawer_reducer';

import formReducer from './form_reducer';

import loginReducer from './login_reducer'


const rootReducer = combineReducers({

    drawerReducer,
    formReducer,
    loginReducer

});

export default rootReducer