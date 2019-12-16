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


type EventNames = 'click' | 'scroll' | 'mousemove'
var bb: EventNames = 'click'
bb = '111' // 只允许是 'click' 或 'scroll' 或 'mousemove'

type SexType = '男' | '女'
function setSex(sex:SexType) {
    console.log(sex)
}
setSex('男')
setSex('ssss') // 只能设置 '男' | '女'