import {actionTypes} from "../constants/actionTypes";

let defaultState = {
    status: false
}


function changeFunReducer(state, action) {
    switch (action.type) {
        case actionTypes.testFecthData:
            return {
                ...state,
                state: action.state
            };
        default:
            return null;
    }
}

export default changeFunReducer;