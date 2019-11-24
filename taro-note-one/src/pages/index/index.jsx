import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

import Child from './child'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页s'
  }

  state = {
    name: 'BGA',
    nickname: 'bingoogolapple'
  }

  componentWillMount() {
    // 第一次渲染之前，只执行一次
    console.log('Parent componentWillMount')
  }

  componentDidMount() {
    // 第一次渲染之后，只执行一次
    console.log('Parent componentDidMount')
  }

  componentWillUnmount() {
    // 卸载之前执行，只会执行一次
    console.log('Parent componentWillUnmount')
  }

  // 作为 Page 时才会触发
  componentDidShow() {
    // 可见
    console.log('Parent componentDidShow')

    this.setState({
      name: '王浩'
    }, () => {
      console.log('Parent 已更新完毕', this.state.name, this.state.nickname)
    })
    console.log('Parent 未更新完毕', this.state.name, this.state.nickname)
  }

  componentWillReceiveProps(nextProps) {
    // 会在父组件传递给子组件的参数发生改变时触发
    console.log('Parent componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 检查此次 setState 是否要进行 render 调用，一般用来多次的 setState 调用时提示 render 的性能
    console.log('Parent shouldComponentUpdate', nextProps, nextState)
    return true
  }

  componentWillUpdate() {
    // state 数据将要更新
    console.log('Parent componentWillUpdate')
  }

  componentDidUpdate() {
    // state 数据更新后
    console.log('Parent componentDidUpdate')
  }

  componentDidHide() {
    // 不可见
    console.log('Parent componentDidHide')
  }

  getDesc() {
    console.log('Parent getDesc')
    return '我是描述信息'
  }

  render() {
    return (
      <View className='index'>
        <Text>我是父组件</Text>
        <Text>{this.state.name}</Text>
        <Text>{this.state.nickname}</Text>
        <Text>{this.getDesc()}</Text>
        <Child />
      </View>
    )
  }
}

/**
 * Parent componentWillMount
 * Parent getDesc
 * Child componentWillMount
 * Child getDesc
 * Child componentDidMount
 * Parent componentDidMount
 * Parent componentDidShow
 * Parent 未更新完毕 BGA bingoogolapple
 * Parent shouldComponentUpdate {children: Array(0)} {name: "王浩", nickname: "bingoogolapple"}
 * Parent componentWillUpdate
 * Parent getDesc
 * Child componentWillReceiveProps {children: Array(0)}
 * Child shouldComponentUpdate {children: Array(0)} {name: "BGA", nickname: "bingoogolapple"}
 * Child componentWillUpdate
 * Child getDesc
 * Child componentDidUpdate
 * Parent componentDidUpdate
 * Parent 已更新完毕 王浩 bingoogolapple
 */

/**
 * Taro 中状态更新一定是异步的，React 中状态更新不一定是异步的
 * 通 React 一样，更新数据必须调用 setState 方法，直接赋值是不会更新组件的（Vue 中执行「this.属性名 = 属性值」会更新组件）
 */