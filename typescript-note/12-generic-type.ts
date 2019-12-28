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

interface ICreateOne{
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