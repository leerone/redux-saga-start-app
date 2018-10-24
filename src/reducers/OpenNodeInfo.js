import {actionTypes} from "../constants/actionTypes";

function openNodeInfo(state, action) {
        switch (action.type) {
                case actionTypes.openNodeInfo:
                        return {...action.value};
                default:
                        return null;
        }
}

export default openNodeInfo;