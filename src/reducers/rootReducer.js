import {combineReducers} from 'redux'
import commSystem from './CommSystem'
import dateRange from "./DateRange";
import openNodeInfo from "./OpenNodeInfo"
import changeFunReducer from "./TestFetchData";

const rootReducer = combineReducers({
        commSystem: commSystem,
        dateRange: dateRange,
        nodeInfo: openNodeInfo,
        changeFunReducer: changeFunReducer
});

export default rootReducer