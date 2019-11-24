import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'

// 没有 export default 时这样的写法是错误的
// import utils from '../../utils'

import { getData, setData } from '../../utils'

import avatarImg from '../../img/avatar.png'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '测试路由'
  }

  state = {
    visibility: true,
    list: [
      { id: 1, name: '博客1' },
      { id: 2, name: '博客2' },
      { id: 3, name: '博客3' },
      { id: 4, name: '博客4' },
      { id: 5, name: '博客5' },
      { id: 6, name: '博客6' },
      { id: 7, name: '博客7' },
    ],
    loadingStatus: 'loading',
  }

  navigateTo() {
    // https://nervjs.github.io/taro/docs/router.html
    Taro.navigateTo({
      url: '/pages/third/index?id=2&type=test'
    })
  }

  redirectTo() {
    Taro.redirectTo({
      url: '/pages/third/index?id=2&type=test'
    })
  }

  importJs() {
    getData()
    setData()
  }

  switchVisibility() {
    this.setState({
      visibility: !this.state.visibility,
      loadingStatus: this.getNextStatus()
    })
  }

  getNextStatus() {
    if (this.state.loadingStatus == 'loading') {
      return 'fail'
    } else if (this.state.loadingStatus == 'fail') {
      return 'no-more'
    } else if (this.state.loadingStatus == 'no-more') {
      return 'loading'
    }
  }

  // Taro 不允许在 render 外部定义 jsx，因为小程序不允许
  render() {

    // 分成两行写时，微信小程序里始终会展示后面部分
    // let dom = null
    // dom = this.state.visibility ? <Text>可见4</Text> : null

    // 要写成单行
    let dom = this.state.visibility ? <Text>可见4</Text> : null
    // let dom = this.state.visibility && <Text>可见4</Text>
    // 不要用这种方式，当 visibility 为 false 时微信里会显示文本 true
    // let dom = !this.state.visibility || <Text>可见4</Text>

    return (
      <View>
        <Button size='mini' type='primary' onClick={this.navigateTo}>navigateTo</Button>
        <Button size='mini' type='primary' onClick={this.redirectTo}>redirectTo</Button>
        <Button size='mini' type='primary' onClick={this.importJs}>导入js</Button>
        <Image className='img1' src={require('../../img/avatar.png')} mode="aspectFit" />
        <Image className='img2' src={avatarImg} mode="aspectFit" />
        <Button size='mini' type='primary' onClick={this.switchVisibility.bind(this)}>条件渲染</Button>
        {
          // 条件渲染 https://nervjs.github.io/taro/docs/condition.html
          this.state.visibility ? <Text>可见1</Text> : null
        }
        {
          this.state.visibility && <Text>可见2</Text>
        }
        {
          // 不要用这种方式，当 visibility 为 false 时微信里会显示文本 true
          !this.state.visibility || <Text>可见3</Text>
        }
        {
          dom
        }
        {
          {
            'loading': '加载中',
            'fail': <Text> 加载失败, 点击重试 </Text>,
            'no-more': '没有更多了'
          }[loadingStatus] /** loadingStatus 是 `loading`、`fail`、`no-more`  其中一种状态 **/
        }
        {this.state.list.map((item, index) => {
          return (<View key={item.id}><Text>{item.name}</Text></View>)
        })}
      </View>
    )
  }
}
