import {actionTypes} from "../constants/actionTypes";
import axios from "axios";

export function changeCommSystem(value) {
        return {
                type:actionTypes.changCommSystem,
                value
        }
}
export function changeDateRange(value) {
        return {
                type:actionTypes.changeDateRange,
                value
        }
}
export function openNodesInfo(value) {
        return {
                type:actionTypes.openNodeInfo,
                value
        }
}

export function loadData() {
    return (dispactch) => {
            return axios.get("/api/test/getMark").then((result) => {
                    dispactch(changeEvt(result.success));
            });
    }
}

export function changeEvt(status) {
    return {
            type: actionTypes.testFecthData,
            status
    }
}