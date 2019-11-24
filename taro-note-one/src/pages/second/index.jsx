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

  render() {
    return (
      <View>
        <Button size='mini' type='primary' onClick={this.navigateTo}>navigateTo</Button>
        <Button size='mini' type='primary' onClick={this.redirectTo}>redirectTo</Button>
        <Button size='mini' type='primary' onClick={this.importJs}>导入js</Button>
        <Image className='img1' src={require('../../img/avatar.png')} mode="aspectFit" />
        <Image className='img2' src={avatarImg} mode="aspectFit" />
      </View>
    )
  }
}
