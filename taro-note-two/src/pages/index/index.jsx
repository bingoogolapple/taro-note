import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

import thumbUp from '../../img/thumb-up.png'
import thumbDown from '../../img/thumb-down.png'

import AddQuestion from './addquestion'

function getStore(key) {
  let str = Taro.getStorageSync(key)
  if (!str) {
    return []
  }
  return JSON.parse(str)
}

function setStore(key, obj) {
  let str = obj
  if (typeof obj === 'object') {
    str = JSON.stringify(obj)
  }
  Taro.setStorageSync(key, str)
}

// let newArr = getStore('questions').map(item => {
//   return { id: parseInt(Math.random() * 10000), ...item }
// })
// setStore('questions', newArr)

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    showQeustionModal: false,
    questionList: getStore('questions')
  }

  showAddQuestionDialog() {
    this.setState({
      showQeustionModal: true
    })
  }

  dismissQuestionDialog() {
    this.setState({
      showQeustionModal: false
    })
  }

  handleAddQuestionSuccess(question) {
    this.dismissQuestionDialog()
    console.log(question)
    let newQuestion = { id: parseInt(Math.random() * 10000), vote: 0, ...question }
    let newQuestionList = this.state.questionList
    newQuestionList.push(newQuestion)
    this.updateQuestionList(newQuestionList)
  }

  updateQuestionList(newQuestionList) {
    this.setState({ questionList: newQuestionList }, () => {
      setStore('questions', newQuestionList)
    })
  }

  handlePlusVote(question) {
    question.vote = question.vote ? (question.vote + 1) : 1
    this.updateQuestion(question)
  }

  updateQuestion(question) {
    let { questionList } = this.state
    let newQuestionList = questionList.map(item => {
      if (item.id == question.id) {
        item = { ...question }
      }
      return item
    })
    this.updateQuestionList(newQuestionList)
  }

  handleMinusVote(question) {
    question.vote = question.vote ? (question.vote - 1) : -1
    this.updateQuestion(question)
  }

  render() {
    let { questionList } = this.state
    questionList = questionList.sort((itemA, itemB) => itemA.vote - itemB.vote)
    return (
      <View className='index'>
        <View className='title'>Taro 问答实例</View>
        <View className='question-list'>
          {
            questionList.map((item, index) => {
              return (
                <View key={item.id} className='question'>
                  <View className='question-left'>
                    <View className='question-title'>{item.title}</View>
                    <View className='question-desc'>{item.desc}</View>
                  </View>
                  <View className='question-right'>
                    <Image onClick={this.handlePlusVote.bind(this, item)} className='img' src={thumbUp} />
                    <Text>{item.vote ? item.vote : 0}</Text>
                    <Image onClick={this.handleMinusVote.bind(this, item)} className='img' src={thumbDown} />
                  </View>
                </View>
              )
            })
          }
        </View>
        {this.state.showQeustionModal && <AddQuestion onClickCancel={this.dismissQuestionDialog.bind(this)} onAddQuestionSuccess={this.handleAddQuestionSuccess.bind(this)} />}
        <Button onClick={this.showAddQuestionDialog.bind(this)} type='primary' className='btn-question'>提问</Button>
      </View>
    )
  }
}
