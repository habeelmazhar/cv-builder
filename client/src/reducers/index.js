import auth from './auth'
import draft from './draft'
import resume from './resume'

import { combineReducers } from 'redux'

export default combineReducers({ auth, draft, resume })