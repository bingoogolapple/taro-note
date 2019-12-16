/**
 * TypeScript 中的枚举
 *
 * 1、枚举 Enum 类型用于取值被限定在一定范围内的场景
 * 2、采用关键字 enum 定义。例如 enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
 * 枚举成员会被赋值为 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
 */

enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }

console.log(Days[0]) // Sun
console.log(Days.Sun) // 0

var day1: Days = 0
console.log(day1 === Days.Sun) // true
console.log(day1) // 0
