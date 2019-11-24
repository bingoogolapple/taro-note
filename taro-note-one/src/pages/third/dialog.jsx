import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Dialog extends Component {
    render() {
        return (
            <View>
                <View>
                    {this.props.renderHeader}
                </View>
                <View>
                    {this.props.children}
                </View>
                <View>
                    {this.props.renderFooter}
                </View>
            </View>
        )
    }
}
