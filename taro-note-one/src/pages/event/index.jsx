import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

const isH5 = process.env.TARO_ENV == 'h5'
if (isH5) {
    // 导入 h5 资源
} else {
    // 导入非 h5 资源
}

export default class Event extends Component {

    config = {
        navigationBarTitleText: '事件'
    }

    state = {
        key1: 'value1'
    }

    clickDemo1(event) {
        // 阻止事件冒泡必须明确调用 stopPropagation 方法
        event.stopPropagation()
        /**
         * 没有 bind(this) 时
         * 微信小程序打印 this 是 Event
         * h5 打印 this 是 undefined
         */
        console.log(this, event)
        console.log(arguments)
    }

    clickDemo2(event) {
        /**
         * 有 bind(this) 时
         * 微信小程序打印 this 是 Event
         * h5 打印 this 是 WrappedComponent
         */
        console.log(this, event)
        // 可以通过 arguments 获取参数
        console.log(arguments)
    }

    // 当你通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面
    clickDemo3(name, age, event) {
        /**
         * 有 bind(this) 时
         * 微信小程序打印 this 是 Event
         * h5 打印 this 是 WrappedComponent
         */
        console.log(this, event, name, age)
        console.log(arguments)
    }

    handleClick = (name, age) => (event) => {
        console.log(this, event, name, age)
    }

    render() {
        return (
            <View>
                <Button size='mini' type='primary' onClick={this.clickDemo1}>{this.state.key1} 非bind</Button>
                <Button size='mini' type='primary' onClick={this.clickDemo2.bind(this)}>{this.state.key1} bind无参</Button>
                <Button size='mini' type='primary' onClick={this.clickDemo3.bind(this, 'BGA', 28)}>{this.state.key1} bind有参</Button>
                {/* 注意：在各小程序端，使用匿名函数，尤其是在 循环中 使用匿名函数，比使用 bind 进行事件传参占用更大的内存，速度也会更慢。 */}
                <Button size='mini' type='primary' onClick={() => console.log(this.state.key1)}>{this.state.key1} 匿名函数1</Button>
                <Button size='mini' type='primary' onClick={() => {
                    this.setState({ key1: '修改后' })
                }}>{this.state.key1} 匿名函数2</Button>

                <Button size='mini' type='primary' onClick={this.handleClick('BGA', 28)}>{this.state.key1} 柯里化</Button>

                <Text>环境变量 {process.env.TARO_ENV}</Text>
            </View>
        )
    }
}
