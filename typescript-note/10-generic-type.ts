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

interface ICreate {
    <T>(name: string, value: T): Array<T>
}
var func1: ICreate
func1 = function <T>(name: string, value: T): T[] {
    return []
}
var func2: ICreate
func2 = function <T>(name: string, value: T): Array<T> {
    return []
}

var arr4: number[] = func1('aaaaa', 1)
var arr5 = func1('aaaaa', 1) // 会自动类型推导
var arr6: string[] = func1('bbbbb', '22')
