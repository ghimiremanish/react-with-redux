import {BUY_NOODLE, BUY_SOUP} from './type'

const initialState = {
    numberOfNoodle: 100,
    numberOfSoup: 15
}

const noodleReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_NOODLE:
            return{
                ...state,
                numberOfNoodle: state.numberOfNoodle - 1
            }
        case BUY_SOUP:
            return{
                ...state,
                numberOfSoup: state.numberOfSoup - 1,
                numberOfNoodle: state.numberOfNoodle - 2
            }
        default: return state
    }
}

export default noodleReducer