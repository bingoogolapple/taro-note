import Taro, { Component } from '@tarojs/taro';
import { ScrollView, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicList, getNextList } from '../../actions/topiclist';
import TopicItem from './topicitem';

@connect(function (store) {
    return { ...store.topiclist, currentCata: store.menu.currentCata }
}, function (dispatch) {
    return {
        getTopicList(params) {
            dispatch(getTopicList(params))
        },
        getNextList(params) {
            dispatch(getNextList(params))
        }
    }
})
class TopicList extends Component {
    componentWillMount() {
        let { page, limit, currentCata } = this.props;
        this.props.getTopicList({ page, limit, tab: currentCata.key })
    }
    // 触发分页请求 肯定是要请求下一页的  没有总页码 
    onScrollToLower() {
        let { page, limit, currentCata } = this.props;
        this.props.getNextList({ page: (page + 1), limit, tab: currentCata.key })
    }
    render() {
        let { list } = this.props;
        return (<ScrollView style={{ height: '650PX' }} onScrollToLower={this.onScrollToLower.bind(this)} scrollY={true}>
            {
                list.map((item) => <TopicItem item={item} />)
            }
        </ScrollView>)
    }
}
export default TopicList;