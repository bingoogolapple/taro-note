var str1: String = '1'
var str2: string = '1'
var num1: Number = 1
var num2: number = 1
var bool1: Boolean = true
var bool2: boolean = true
var null1: null = null
var un: undefined = undefined

// null 和 undefined 是其他类型的子类型，可以赋值给其他类型的变量ß
str1 = null
str2 = null
num1 = null
num2 = null
bool1 = null
bool2 = null

var func1 = function (): void {
    // void 返回类型不能有返回值
    return 1
}


// any 用来表示允许赋值为任意类型，声明一个变量为任意值之后，对它的任何操作返回的内容的类型都是 any
// 变量如果在声明的时候未指定类型，那么它会被识别为 any 类型，完全不被类型检查

var a1: any
a1 = 1
a1 = '1'
var a2
a2 = 1
a2 = '1'

// 类型推导：当给一个变量赋值初始化的时候，如果没有指定类型，会根据初始值推导类型
var b1 = 1
b1 = '1'

// 联合类型
var multitype: string | number = 1
multitype = '1'
// 只能赋值联合类型
multitype = true
// 只能访问联合类型共有的类型和方法
multitype.length
