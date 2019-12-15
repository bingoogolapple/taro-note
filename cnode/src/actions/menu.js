import { getTopicList } from './topiclist';

/*
同步方式显示抽屉
export const showDrawer = () => {
    return { type: 'showDrawer' }
}
export function showDrawer() {
    return { type: 'showDrawer' }
}
*/

// 异步方式显示抽屉
export function showDrawer() {
    return function (dispatch) {
        dispatch({ type: 'showDrawer' })
    }
}
// 隐藏抽屉
export function hideDrawer() {
    return (dispatch) => {
        dispatch({ type: 'hideDrawer' })
    }
}
// 切换当前分类
export function changeCata(cata) {
    return dispatch => {
        dispatch({ type: 'changeCata', currentCata: cata });
        dispatch(getTopicList({ tab: cata.key, page: 1, limit: 20 }));
    }
}