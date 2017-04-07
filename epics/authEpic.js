import { LOGIN, LOGOUT, LOGIN_ERROR, LOGGED_IN } from '../actions/types';

import { Observable } from 'rxjs';

import firebase from '../firebase';

export const loginEpic = action$ => 
    action$.ofType(LOGIN)
    .mergeMap((action) => 
        Observable.from(firebase.auth().signInWithEmailAndPassword(action.payload.email, action.payload.password))
        .map(() => {
            return {type:LOGGED_IN}
        })
        .catch(error => Observable.of(
                {type:LOGIN_ERROR}
            ))
    )