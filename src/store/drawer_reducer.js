import { initialState } from './initialState'

const drawerReducer = (state = initialState, action) => {

    if (action.type === 'OPEN_DRAWER'){

        document.getElementById("mySidenav").style.width = "250px";

        console.log('OPEN_DRAWER RAN');

        return {

            ...state

        }

    }

    if (action.type === 'CLOSE_DRAWER'){

        document.getElementById("mySidenav").style.width = "0";

        console.log("CLOSE_DRAWER RAN");

        return {

            ...state

        }


    }


    return state


};


export default drawerReducer