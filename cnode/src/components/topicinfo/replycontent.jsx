import Taro, { Component } from '@tarojs/taro'
import { View, Button, Textarea } from '@tarojs/components'
import { AtTextarea } from 'taro-ui'

import './replycontent.less'

class ReplyContent extends Component {
    state = {
        value: ''
    }

    btnOK() {
        if (this.state.value && this.state.value.length > 0) {
            let value = this.state.value
            this.props.onOKReplyContent && this.props.onOKReplyContent(value)
        } else {
            Taro.showToast({ title: '请输入评论内容', icon: 'none' })
        }
    }
    btnCancel() {
        this.props.onCancelReplyContent && this.props.onCancelReplyContent()
    }
    changeContent(event) {
        if (event && event.target) {
            console.log(this.state.value)
            this.setState({ value: event.target.value })
        }
    }
    render() {
        return (<View className='replycontent'>
            <Textarea value={this.state.value} onInput={this.changeContent.bind(this)} className='replycontent-text' placeholder='请输入回复内容'></Textarea>
            <AtTextarea
                value={this.state.value}
                onChange={this.changeContent.bind(this)}
                maxLength={200}
                placeholder='你的问题是...'
            />
            <View className='replycontent-btngroup'>
                <Button onClick={this.btnOK.bind(this)} className='btn'>确定</Button>
                <Button onClick={this.btnCancel.bind(this)} className='btn'>取消</Button>
            </View>
        </View>)
    }
}
export default ReplyContent