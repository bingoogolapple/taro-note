import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { showDrawer, hideDrawer, changeCata } from '../../actions/menu'

import './menu.less'

import { AtDrawer } from 'taro-ui'

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
        },
        changeCata(cata) {
            dispatch(changeCata(cata))
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
    // 获取分类列表
    getItems() {
        console.log(this)
        return this.props.cataData.map(item => item.value);
    }
    // 点击分类
    clickCata(index) {
        let { cataData } = this.props;
        let clickCata = cataData[index];
        if (clickCata.key !== this.props.currentCata.key) {
            this.props.changeCata(clickCata);
        }
    }
    render() {
        let { showDrawer, currentCata } = this.props;
        return (<View>
            <AtDrawer
                className='at-drawer'
                show={showDrawer}
                onClose={this.closeDrawer.bind(this)}
                onItemClick={this.clickCata.bind(this)}
                items={this.getItems()}
            />
            <View className='topiclist-menu'>
                {/* h5 中可以直接写箭头函数，但是小程序中不可以。onClick={() => this.props.showMenu()} */}
                <Image onClick={this.showDrawer.bind(this)} className='image' src={require('../../assets/img/cata.png')} />
                <Text>{currentCata.value}</Text>
                <Image className='image' src={require('../../assets/img/login.png')} />
            </View>
        </View>)
    }
}

export default Menu