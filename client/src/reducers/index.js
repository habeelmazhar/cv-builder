import auth from './auth'
import draft from './draft'
import resume from './resume'
import theme from './theme'

import { combineReducers } from 'redux'

export default combineReducers({ auth, draft, resume, theme })