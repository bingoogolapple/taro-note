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