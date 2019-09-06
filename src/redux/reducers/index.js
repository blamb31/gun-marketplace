import {combineReducers} from 'redux'

import user from './user'
import guns from './guns'


export default combineReducers({
    user,
    guns,
})