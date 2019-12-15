import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { showDrawer, hideDrawer } from '../../actions/menu'

import './menu.less'

@connect(function (allStore) {
    // 将 allStore 中指定节点转换成 props
    return { ...allStore.menu }
}, function (dispatch) {
    // 返回一个对象，对象中定义了一个个的函数，通过 props 的形式传递给组件
    return {
        // 不能叫 showDrawer，因为 props 中已经有 showDrawer 这个 boolean 属性了
        showMenu() {
            /**
             * 异步方式显示抽屉，dispatch 会被当做 showDrawer() 返回的函数的参数
             * export function showDrawer() {
             *     return function (dispatch) {
             *         dispatch({ type: 'showDrawer' })
             *     }
             * }
             */
            dispatch(showDrawer())
        },
        hideDrawer() {
            dispatch(hideDrawer())
        }
    }
})
class Menu extends Component {
    //显示抽屉
    showDrawer() {
        this.props.showMenu()
    }
    //关闭抽屉时触发
    closeDrawer() {
        this.props.hideDrawer()
    }
    render() {
        return (<View className='topiclist-menu'>
            {/* h5 中可以直接写箭头函数，但是小程序中不可以。onClick={() => this.props.showMenu()} */}
            <Image onClick={this.showDrawer.bind(this)} className='image' src={require('../../assets/img/cata.png')} />
            <Text>{this.props.currentCata.value}</Text>
            <Image className='image' src={require('../../assets/img/login.png')} />
        </View>)
    }
}

export default Menu