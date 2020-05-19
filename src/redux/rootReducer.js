import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/reducer'
import noodleReducer from './noodle/noodleReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    Noodle: noodleReducer,
})

export default rootReducer