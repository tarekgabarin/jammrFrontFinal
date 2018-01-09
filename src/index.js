import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './store/index_reducer';

import thunk from 'redux-thunk';

import {Provider} from 'react-redux'

import {createStore, applyMiddleware} from 'redux'

const muiTheme = getMuiTheme({

    fontFamily: "Raleway, sans-serif",


    appBar: {
        height: 50,
    },

    raisedButton: {

        color: '#273043',

        textColor: '#FFFFFF',


    },


});


muiTheme.shadows = [];

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider store={store}>

        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>

    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
