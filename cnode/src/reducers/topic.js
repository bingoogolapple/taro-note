const TOPIC_STATE = {
    page: 1,
    limit: 20,
    list: [],
    topicinfo: {},
    replies: [],
    admireState: false  // 点赞状态
}
export default function topiclist(preState = TOPIC_STATE, action) {
    switch (action.type) {
        case 'admireSuccess':
            return { ...preState, admireState: !preState.admireState }
        case 'getTopicInfo':
            return { ...preState, replies: action.infoData.replies, topicinfo: { ...action.infoData, replies: null } }
        case 'getTopicList':
            return { ...preState, list: action.list, page: 1 }
        case 'appendTopicList':
            return { ...preState, list: preState.list.concat(action.list), page: action.page }
        default:
            return { ...preState }
    }
}