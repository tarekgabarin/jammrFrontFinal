import {combineReducers} from 'redux'

import drawerReducer from './drawer_reducer';

////import formReducer from './form_reducer';

import loginReducer from './login_reducer'

import {reducer as reduxForm} from 'redux-form'


const rootReducer = combineReducers({

    drawerReducer,
    loginReducer,
    form: reduxForm

});

export default rootReducer