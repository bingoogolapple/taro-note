import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import Dialog from './dialog'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '第三页'
  }

  componentWillMount() {
    console.log(this.$router)
    let { id } = this.$router.params
    console.log(id)
  }

  navigateBack() {
    Taro.navigateBack()
  }

  render() {
    return (
      <View>
        <Button size='mini' type='primary' onClick={this.navigateBack}>navigateBack</Button>
        <Dialog
          renderHeader={
            <View>我是标题</View>
          }
          renderFooter={
            <Button size='mini' type='primary'>Close</Button>
          }
        >
          <Image src={require('../../img/avatar.png')} mode="aspectFit" />
        </Dialog>
      </View>
    )
  }
}
