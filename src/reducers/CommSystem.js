import {actionTypes} from "../constants/actionTypes";

 function commSystem(state, action) {
        switch (action.type) {
                case actionTypes.changCommSystem:
                        return {...action.value};
                default:
                        return null;
        }
}

export default commSystem;