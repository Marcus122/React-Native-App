import { combineEpics } from 'redux-observable';
import {loginEpic} from './authEpic';

import 'rxjs';

const rootEpic = combineEpics(
    loginEpic
);

export default rootEpic;