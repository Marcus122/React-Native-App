import { LOGIN, LOGOUT, LOGIN_ERROR, LOGGED_IN, GOOGLE_LOGIN } from '../actions/types';

const defaultState = {loggedIn:false};

export default function(state={},action){
    switch(action.type){
        case GOOGLE_LOGIN:
        case LOGIN:
            return {loading:true};
        case LOGOUT:
            return {loggedIn:false};
        case LOGIN_ERROR:
            return {error:true};
        case LOGGED_IN:
            return {loggedIn:true}
    }
    return state;
}