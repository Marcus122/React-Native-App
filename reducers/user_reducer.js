import { LOGGED_IN, LOGOUT } from '../actions/types';


export default function(state={},action){
    switch(action.type){
        case LOGGED_IN:
            return {...state,...action.payload};
        case LOGOUT:
            return {}
    }
    return state;
}