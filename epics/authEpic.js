import { LOGIN, LOGOUT, LOGIN_ERROR, LOGGED_IN, GOOGLE_LOGIN } from '../actions/types';

import { Observable } from 'rxjs';

import firebase from '../firebase';

export const loginEpic = action$ => 
    action$.ofType(LOGIN)
    .mergeMap((action) => 
        Observable.from(firebase.auth().signInWithEmailAndPassword(action.payload.email, action.payload.password))
        .map((user) => {
            return {
                type:LOGGED_IN,
                payload:user
            }
        })
        .catch(error => Observable.of(
                {type:LOGIN_ERROR}
            ))
    )

export const googleLoginEpic = action$ => 
    action$.ofType(GOOGLE_LOGIN)
    .mergeMap((action) => 
        Observable.from(firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(null, action.payload)))
        .map((user) => {
            console.log("google login")
            return {
                type:LOGGED_IN,
                payload:user
            }
        })
        .catch(error => {
            console.log("google fail  login")
            return Observable.of(
                {type:LOGIN_ERROR}
            )
        })
    )