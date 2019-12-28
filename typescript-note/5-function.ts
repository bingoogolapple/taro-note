/**
 * TypeScript 中的函数类型
 *
 * 1、函数约束：参数约束、返回值约束
 * 2、函数本身赋值的变量的约束
 * 3、可采用重载的方式才支持联合类型的函数关系
 */

function funcType1(name: string, age: number): number {
    return age;
}
var ageNum: number = funcType1('1', 1)

// 可选参数
function funcType2(name: string, age: number, sex?: string): number {
    return age;
}
ageNum = funcType2('1', 1)
ageNum = funcType2('1', 1, '男')

// 默认参数
function funcType3(name: string = 'BGA', age: number = 28, sex?: string): number {
    return age;
}
ageNum = funcType3()
ageNum = funcType3('1')
ageNum = funcType3(1) // 必须按顺序来
ageNum = funcType3('1', 1)
ageNum = funcType3('1', 1, '男')

function funcTypeDot(name: string, ...rest:string[]) {
    console.log(name, rest)
}
funcTypeDot('BGA')
funcTypeDot('BGA', 'bingo', 'googol', 'apple')

// 表达式类型的函数
// 对函数进行约束
var funcType4 = function (name: string, age: number): number {
    return age;
}
funcType4('1', 1)
funcType4(1, 1)

// 对变量进行约束1
var funcType5: (name: string, age: number) => number = function (name: string, age: number): number {
    return age
}
funcType5('1', 1)
funcType5(1, 1)

interface IFuncType6 {
    (name: string, age: number): number
}
// 对变量进行约束2
var funcType6: IFuncType6 = function (name: string, age: number): number {
    return age
}

var getValue = function (value: number | string): number | string {
    return value
}
getValue(1)
getValue('1')

// 可采用重载的方式支持联合类型的函数关系，限定输入输出参数类型
function getMultiValue(value: number): number
function getMultiValue(value: string): string
function getMultiValue(value: number | string): number | string {
    if (typeof value === 'number') {
        return value.toString()
    } else if(typeof value === 'string') {
        return Number(value)
    }
    return value
}
var gNum: number = getMultiValue(1)
var gString: string = getMultiValue('1')


// 类型断言
function getAssert(name: string | number) {
    // 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
    // return (<string>name).length
    return (name as string).length // 在 jsx 中只能使用 as 语法，不能使用 (<xxtype>xxvar)
}