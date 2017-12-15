import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './store/index_reducer';

import {Provider} from 'react-redux'

import {createStore} from 'redux'

const muiTheme = getMuiTheme({

    fontFamily: "Raleway, sans-serif",

    palette: {
        canvasColor: '#273043',
    },
    appBar: {
        height: 50,
    },
});



const store = createStore(
        rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);




ReactDOM.render(
    <Provider store={store}>

        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>

    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
