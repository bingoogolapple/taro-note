import { getJSON, postJSON } from '../utils/request';
import api from '../constants/api';

// 请求首页数据
export function getTopicList(params) {
    return async dispatch => {
        let result = await getJSON(api.gettopics, params);
        if (result && result.data && result.data.success) {
            dispatch({ type: 'getTopicList', list: result.data.data })
        }
    }
}

// 请求下页数据
export function getNextList(params) {
    return async dispatch => {
        let result = await getJSON(api.gettopics, params);
        if (result && result.data && result.data.success) {
            if (result.data.data.length > 0) {
                dispatch({ type: 'appendTopicList', list: result.data.data, page: params.page })
            }
        }
    }
}