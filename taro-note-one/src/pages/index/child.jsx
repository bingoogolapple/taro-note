import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Child extends Component {

  config = {
    navigationBarTitleText: '首页s'
  }

  state = {
    name: 'BGA',
    nickname: 'bingoogolapple'
  }

  componentWillMount() {
    // 第一次渲染之前，只执行一次
    console.log('Child componentWillMount')
  }

  componentDidMount() {
    // 第一次渲染之后，只执行一次
    console.log('Child componentDidMount')
  }

  componentWillUnmount() {
    // 卸载之前执行，只会执行一次
    console.log('Child componentWillUnmount')
  }

  // 作为 Page 时才会触发，作为内嵌组件时不会触发
  componentDidShow() {
    // 可见
    console.log('Child componentDidShow')

    this.setState({
      name: '王浩'
    }, () => {
      console.log('Child 已更新完毕', this.state.name, this.state.nickname)
    })
    console.log('Child 未更新完毕', this.state.name, this.state.nickname)
  }

  componentWillReceiveProps(nextProps) {
    // 会在父组件传递给子组件的参数发生改变时触发
    console.log('Child componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 检查此次 setState 是否要进行 render 调用，一般用来多次的 setState 调用时提示 render 的性能
    console.log('Child shouldComponentUpdate', nextProps, nextState)
    return true
  }

  componentWillUpdate() {
    // state 数据将要更新
    console.log('Child componentWillUpdate')
  }

  componentDidUpdate() {
    // state 数据更新后
    console.log('Child componentDidUpdate')
  }

  componentDidHide() {
    // 不可见
    console.log('Child componentDidHide')
  }

  getDesc() {
    console.log('Child getDesc')
    return '我是描述信息'
  }

  render() {
    return (
      <View className='index'>
        <Text>我是子节点</Text>
        <Text>{this.state.name}</Text>
        <Text>{this.state.nickname}</Text>
        <Text>{this.getDesc()}</Text>
      </View>
    )
  }
}
