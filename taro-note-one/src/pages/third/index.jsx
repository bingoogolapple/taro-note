import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '第三页'
  }

  componentWillMount() {
    console.log(this.$router)
    let {id} = this.$router.params
    console.log(id)
  }

  navigateBack() {
    Taro.navigateBack()
  }

  render() {
    return (
      <View>
        <Button size='mini' type='primary' onClick={this.navigateBack}>navigateBack</Button>
      </View>
    )
  }
}
