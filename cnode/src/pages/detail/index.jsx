import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './detail.less'

class Detail extends Component {
    config = {
        navigationBarTitleText: '话题详情'
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                {this.$router.params.topicid}
            </View>
        )
    }
}

export default Detail
