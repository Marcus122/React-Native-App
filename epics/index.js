import { combineEpics } from 'redux-observable';
import {loginEpic,googleLoginEpic} from './authEpic';

import 'rxjs';

const rootEpic = combineEpics(
    loginEpic,
    googleLoginEpic
);

export default rootEpic;