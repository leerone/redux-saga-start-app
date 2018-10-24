import {actionTypes} from "../constants/actionTypes";

function dateRange(state, action) {
        switch (action.type) {
                case actionTypes.changeDateRange:
                        return {...action.value};
                default:
                        return null;
        }
}

export default dateRange;