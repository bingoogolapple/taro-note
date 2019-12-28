/**
 * TypeScript 中的泛型
 *
 * 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
 */

function createArray<T>(length: number, value: T): Array<T> {
    let arr = []
    for (var i = 0; i < length; i++) {
        arr[i] = value
    }
    return arr
}

var arr1: string[] = createArray(3, '1')
var arr2 = createArray(3, '1') // 会自动类型推导
var arr3: number[] = createArray(3, 11)

interface ICreateOne {
    <T>(name: string, value: T): Array<T>
}

interface ICreateTwo<T> {
    (name: string, value: T): Array<T>
}

var funcOne1: ICreateOne
funcOne1 = function <T>(name: string, value: T): T[] {
    return []
}
var funcOne2: ICreateOne
funcOne2 = function <T>(name: string, value: T): Array<T> {
    return []
}

// 直接限定了具体实现类型
var funcTwo1: ICreateTwo<string> = function (name: string, value: string): string[] {
    return []
}
var funcTwo2: ICreateTwo<number> = function (name: string, value: number): Array<number> {
    return []
}

var arr4: number[] = funcOne1('aaaaa', 1)
var arr5 = funcOne1('aaaaa', 1) // 会自动类型推导
var arr6: string[] = funcOne1('bbbbb', '22')

var aar7 = funcTwo1('aaaa', '1111')
var aar8 = funcTwo2('aaaaa', 2222)

////////////////////////////////////////////////////////

class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
    return x + y
}

let myGenericString = new GenericNumber<string>()
myGenericString.zeroValue = ''
myGenericString.add = function (x, y) {
    return x + y
}
console.log(myGenericString.add(myGenericString.zeroValue, 'test'))

////////////////////////////////////////////////////////

interface Lengthwise {
    length: number
    test1: (a: number, b: number) => number
    test2(a: number, b: number): number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    console.log(arg.test1(1, 1))
    console.log(arg.test2(1, 1))
    return arg
}

////////////////////////////////////////////////////////


function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let x = { a: 1, b: 2, c: 3 }
getProperty(x, 'a')

////////////////////////////////////////////////////////
class BeeKeeper {
    hasMask: boolean = true
}
class LionKeeper {
    nametaa: string = 'nametaavalue'
}
class Animal {
    numLengs: number
}
class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper()
}
class Lion extends Animal {
    keeper: LionKeeper = new LionKeeper()
}
// function createInstance<T extends Animal>(c: { new(): T }):T {
//     return new c()
// }
function createInstance<T extends Animal>(c: new() => T):T {
    return new c()
}
console.log(createInstance(Bee).keeper.hasMask)
console.log(createInstance(Lion).keeper.nametaa)