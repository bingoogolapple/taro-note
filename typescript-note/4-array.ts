/**
 * TypeScript中的数组类型
 *
 * 1、【类型 + 方括号】表示法
 * 2、数组泛型 Array<elemType> 表示法
 * 3、接口表示法
 */

interface IUser {
    name: string
    age: number
}
// 1、【类型 + 方括号】表示法
var arr1: number[] = [1, 2, 3]
var arr2: string[] = ['1', '2']
var aar3: any[] = [1, '1', { name: 'BGA' }]
var aar4: IUser[] = [{ name: 'BGA', age: 28 }]

// 2、数组泛型 Array<elemType> 表示法
var arr5: Array<number> = [1, 2, 3]
var arr6: Array<string> = ['1', '2']
var arr7: Array<any> = [1, '1', { name: 'BGA' }]
var arr8: Array<IUser> = [{ name: 'BGA', age: 28 }]

// 3、接口表示法
interface IStringArr {
    [index: number]: string
}
interface INumberArr {
    [index: number]: number
}
interface IUserArr {
    [index: number]: IUser
}
var arr9: IStringArr = ['1', '2']
var arr10: INumberArr = [1, 2, 3]
var arr11: IUserArr = [{ name: 'BGA', age: 28 }]
