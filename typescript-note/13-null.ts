// 默认情况下不会报错，但是加上 --strictNullChecks 参数后编译会报错
let s = 'foo'
s = null // Type 'null' is not assignable to type 'string'
let sn: string | null = 'bar'
sn = null
sn = undefined // Type 'undefined' is not assignable to type 'string | null'

//////////////////////////

function f1(x: number, y?: number) {
    return x + (y || 0)
}
f1(1, 2)
f1(1)
f1(1, undefined)
f1(1, null) // Argument of type 'null' is not assignable to parameter of type 'number | undefined'

//////////////////////////

class C {
    a:number
    b?:number
}

let c = new C()
c.a = 12
c.a = undefined // Type 'undefined' is not assignable to type 'number'
c.b = 13
c.b = undefined
c.b = null // Type 'null' is not assignable to type 'number | undefined'

////////////////////////// 类型保护去除 null //////////////////////////

function f2(sn: string | null): string {
    if (sn === null) { // 这种方式只能兼容 null
        return 'default'
    } else {
        return sn
    }
}

function f3(sn: string | null): string {
    return sn || 'default' // 这种方式能兼容 undefined 和 null
}

function f4(sn: string | undefined): string {
    if (sn === undefined) { // 这种方式只能兼容 undefined
        return 'default'
    } else {
        return sn
    }
}

function f5(sn: string | undefined): string {
    return sn || 'default' // 这种方式能兼容 undefined 和 null
}

/**
 * 默认情况下 || 能兼容 undefined 和 null
 * 但是加上 --strictNullChecks 参数后编译会报错。Argument of type 'undefined' is not assignable to parameter of type 'string | null'
 */

console.log(f2(null)) // default
console.log(f2(undefined)) // undefined
console.log(f3(null)) // default
console.log(f3(undefined)) // default

console.log(f4(undefined)) // default
console.log(f4(null)) // null
console.log(f5(undefined)) // default
console.log(f5(null)) // default

////////////////////////////////////////////////////

function broken(name: string | null): string {
    function postfix(epither: string) {
        // 默认情况下不会报错，但是加上 --strictNullChecks 参数后编译会报错
        // Object is possibly 'null'
        // return name.charAt(0) + '. the ' + epither

        // 加上 ! 明确告诉编译期 name 不会为 null
        return name!.charAt(0) + '. the ' + epither
    }
    name = name || 'Bob'
    return postfix(name)
}

////////////////////////////////////////////////////

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
class UiElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === 'ease-in') {

        } else if (easing === 'ease-out') {

        } else if (easing === 'ease-in-out') {

        } else {

        }
    }
}
let button = new UiElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'uneasy') // Argument of type '"uneasy"' is not assignable to parameter of type 'Easing'
button.animate(0, 0, null) // 默认情况下不会报错，但是加上 --strictNullChecks 参数后编译会报错。Argument of type 'null' is not assignable to parameter of type 'Easing'