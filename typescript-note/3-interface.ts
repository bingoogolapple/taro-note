/**
 * TypeScript 中的对象类型-接口
 *
 * 1、可描述类的一部分抽象行为，也可描述对象的结构形状
 * 2、接口一般首字母大写。有的编程语言中建议接口名称加上 I 前缀
 * 3、赋值的时候，变量的形状必须和接口的形状保持一致
 * 4、接口中可定义可选属性、只读属性、任意属性
 */


// 对象属性
interface IState1 {
    name: string
    age: number
}

var state1: IState1
state1 = null
state1 = { name: 'BGA', age: 28 }
state1 = { name: 'BGA' } // 不能缺少明确定义的 age 属性
state1 = { name: 'BGA', age: 28, nickname: 'bingoogolapple' } // 不能增加未定义的 nickname 属性

// 可限定属性是否唯一
interface IState2 {
    name: string
    age?: number
}
var state2: IState2
state2 = null
state2 = { name: 'BGA', age: 28 }
state2 = { name: 'BGA' } // 可以缺少明确定义的可选 age 属性
state2 = { age: 28 } // 不能缺少明确定义的 name 属性
state2 = { name: 'BGA', age: 28, nickname: 'bingoogolapple' } // 不能增加未定义的 nickname 属性

// 属性个数不确定
interface IState3 {
    name: string
    age?: number
    // 冒号后写 any 或允许的联合类型（必须包含已明确定义的类型）
    [propName: string]: any
    // [propName: string]: string | number
}
var state3: IState3
state3 = { name: 'BGA', age: 28 }
state3 = { name: 'BGA' } // 可以缺少明确定义的可选 age 属性
state3 = { age: 28 } // 不能缺少明确定义的 name 属性
state3 = { name: 'BGA', age: 28, xx1: 'value1', xx2: 1 } // 能增加未定义的 nickname 属性

// readonly 关键字设置只读属性，初始值设置之后不可更改
interface IState4 {
    name: string
    readonly age: number // 年龄一旦录入便不可修改
}
var state4: IState4
state4 = { name: 'BGA', age: 28 }
state4.name = 'bingoogolapple'
state4.age = 29

////////////////////////////////////////////////////////

interface ClockInterface {
    tick()
}
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
}

// 实现接口要实现接口中定义的属性和方法
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log('beep beep')
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log('tick')
    }
}
let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 11, 12)

////////////////////////////////////////////////////////

interface Shape {
    color: String
}
interface PenStroke {
    penWidth: number
}
interface Square extends Shape, PenStroke {
    sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.penWidth = 5.5
square.sideLength = 10

////////////////////////////////////////////////////////

interface Counter {
    (start: number): string

    interval: number

    reset(): void
}

function getCounter(): Counter {
    let counter = (function (start: number) {
        console.log('reset')
    }) as Counter
    counter.interval = 123
    counter.reset = function () {
        console.log('reset')
    }
    return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 1

////////////////////////////////////////////////////////

class Control {
    private state: any
}

// 接口继承类时会继承私有成员
interface SelectableControl extends Control {
    select()
}

class Button extends Control implements SelectableControl {
    select() {
    }
}
class TextBox extends Control {
    // 没有实现接口 SelectableControl 也可以定义 select 方法
    select() {
    }
}

class ImageC implements SelectableControl {
    // 接口继承类时会继承私有成员，这里没有继承 Controll，所以会报错没有 state 属性
    select() {
    }
}