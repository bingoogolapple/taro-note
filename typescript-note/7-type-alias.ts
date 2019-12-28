/**
 * TypeScript 中的类型别名
 *
 * 1、类型别名用来给一个类型起个新名字，采用关键字 type。例如 type StringNumberType = string | number
 * 2、也可以采用 type 来约束取值只能是某些字符串中的一个。例如 type EventNames = 'click' | 'scroll' | 'mousemove'
 */

type StringNumberType = string | number
var aa: StringNumberType = '1'
aa = 1
aa = true // 只允许 string 或 number

interface MultiType1 {
    name: string
    str: number
}

interface MultiType2 {
    name: string
    sex: boolean
}

type MultiType3 = MultiType1 | MultiType2

// 字符串字面量
type EventNames = 'click' | 'scroll' | 'mousemove'
var bb: EventNames = 'click'
bb = '111' // 只允许是 'click' 或 'scroll' 或 'mousemove'

type SexType = '男' | '女'
function setSex(sex:SexType) {
    console.log(sex)
}
setSex('男')
setSex('ssss') // 只能设置 '男' | '女'

////////////////////////// 类型保护（typeof、类型谓词、instanceof） //////////////////////////////

class Bird {
    fly(): void {
        console.log('fly')
    }
    layEggs(): void {
        console.log('layEggs')
    }
}
class Fish {
    swin(): void {
        console.log('swin')
    }
    layEggs(): void {
        console.log('layEggs')
    }
}

function getSmallPet(): Fish | Bird {
    // return {
    //     fly: function () {
    //         console.log('fly')
    //     }, layEggs: function () {
    //         console.log('layEggs')
    //     }
    // }

    return Math.random() > 0.5 ? new Bird() : new Fish()
}

let pet = getSmallPet()
// 检测成员是否存在
if ((pet as Bird).fly) {
    (pet as Bird).fly()
} else if ((pet as Fish).swin) {
    (pet as Fish).swin()
}

// 类型谓词
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swin !== undefined
}

if (isFish(pet)) {
    pet.swin()
} else {
    // 联合类型只有两种类型，能自动推导为 Bird
    pet.fly()
}

if (pet instanceof Fish) {
    pet.swin()
} else {
    // 联合类型只有两种类型，能自动推导为 Bird
    pet.fly()
}

////////////////////////////////////////////////////////

// 类型谓词
function isNumber(x: any): x is number {
    return typeof x === 'number'
}
function isString(x: any): x is string {
    return typeof x === 'string'
}

function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        // 左边拼接 4 个空格
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        // 左边拼接 padding
        return padding + value
    }

    // if (isNumber(padding)) {
    //     // 左边拼接 4 个空格
    //     return Array(padding + 1).join(' ') + value
    // }
    // if (isString(padding)) {
    //     // 左边拼接 padding
    //     return padding + value
    // }

    throw new Error(`Expected string or number got ${padding}`)
}
console.log(padLeft('Hello', 4))
console.log(padLeft('Hello', 'aa'))

////////////////////////////////////////////////////////

function extend<T, U>(first: T, second: U): T & U {
    let result = {} as T & U
    for (let id in first) {
        result[id] = first[id] as any
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id] as any
        }
    }
    return result
}

class Person {
    constructor(public name: string) {
    }
}
interface Loggable {
    log(): void
}
class ConsoleLogger implements Loggable {
    log(): void {
        console.log('xxxxxx')
    }
}
let jim: Person & Loggable = extend(new Person('BGA'), new ConsoleLogger())
jim.log()
console.log(jim.name)