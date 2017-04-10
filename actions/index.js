import { LOGIN, LOGOUT, LOGIN_ERROR, GOOGLE_LOGIN } from './types';

export function login(email,password){
    return {
        type: LOGIN,
        payload:{
            email,
            password
        }
    }
}

export function googleLogin(token){
    return{
        type:GOOGLE_LOGIN,
        payload:token
    }
}