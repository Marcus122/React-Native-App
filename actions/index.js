import { LOGIN, LOGOUT, LOGIN_ERROR } from './types';

export function login(email,password){
    return {
        type: LOGIN,
        payload:{
            email,
            password
        }
    }
}