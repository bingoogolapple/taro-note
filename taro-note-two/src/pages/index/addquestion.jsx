import Taro, { Component } from '@tarojs/taro'
import { View, Textarea, Button, Input } from '@tarojs/components'
import Dialog from './dialog'
import './addquestion.less'

export default class AddQuestion extends Component {

  state = {
    title: '',
    desc: ''
  }

  onTitleChanged(event) {
    this.setState({
      title: event.detail.value
    })
  }

  onDescChanged(event) {
    this.setState({
      desc: event.detail.value
    })
  }

  onClickConfirm() {
    if (this.state.title && this.state.desc) {
      this.props.onAddQuestionSuccess && this.props.onAddQuestionSuccess({ title: this.state.title, desc: this.state.desc })
    } else {
      Taro.showToast({ title: '请输入标题和描述', icon: 'none' })
    }
  }

  onClickCancel() {
    this.props.onClickCancel && this.props.onClickCancel()
  }

  render() {
    return (
      <Dialog>
        <View className='add-question'>
          <View className='question-body'>
            {/* 在 h5 中 setState 触发重新 render 后又会重新聚焦 */}
            <Input focus onInput={this.onTitleChanged.bind(this)} className='question-title' placeholder='请输入您的问题标题' />
            <Textarea onInput={this.onDescChanged.bind(this)} className='question-desc' placeholder='请输入您的问题描述' />
            <View className='btn-group'>
              <Button onClick={this.onClickConfirm.bind(this)} type='primary' className='btn-question'>确定</Button>
              <Button onClick={this.onClickCancel.bind(this)} className='btn-question'>取消</Button>
            </View>
          </View>
        </View>
      </Dialog>
    )
  }
}
