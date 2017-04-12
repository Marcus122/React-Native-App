import { LOGGED_IN, LOGOUT } from '../actions/types';


export default function(state={},action){
    switch(action.type){
        case LOGOUT:
            return {...state,user:action.payload};
        case LOGGED_IN:
            return {user:null}
    }
    return state;
}