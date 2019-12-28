/**
 * TypeScript 中的类的修饰符
 *
 * 1、public、private、protected
 * 2、public 修饰的属性或方法是共有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * 3、private 修饰的属性或方法是私有的，不能再声明他的类的外部访问
 * 4、protected 修饰的属性或方法是受保护的，当前类和子类可以访问
 */

class Person {
    static haha = 'aaaaa'
    readonly name: string = 'BGA'
    private age: number = 28
    protected sex: string = '男'

    protected constructor(name: string) {
        this.name = name // 只读属性只能在定义属性或构造函数中赋值
    }

    walk() {
        this.name = 'ssssss' // Cannot assign to 'name' because it is a read-only property
        console.log(`${this.name} ${this.sex} ${this.age} 正在走路`)
    }

    static test1() {
        console.log('静态方法1')
    }

    static newInstance(name: string): Person {
        return new Person(name)
    }
}

Person.haha = 'bbbbbbb'

var person1 = new Person('bingoogolapple') // Constructor of class 'Person' is protected and only accessible within the class declaration
person1.walk()
console.log(person1.name)
console.log(person1.age) // Property 'age' is private and only accessible within class 'Person'
console.log(person1.sex) // Property 'sex' is protected and only accessible within class 'Person' and its subclasses

class Child extends Person {
    protected department: string

    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }

    callParent() {
        // Only public and protected methods of the base class are accessible via the 'super' keyword
        // super 只能调用父类的方法，不能访问父类的属性
        console.log(super.name) // undefined
        console.log(super.sex) // undefined
        console.log(super.age) // undefined

        // Property 'age' is private and only accessible within class 'Person'
        // 访问父类的属性需要用 this
        console.log(this.name) // BGA
        console.log(this.sex) // 男
        console.log(this.age) // 28
        this.walk()
        super.walk()

        // test1() // 错误
        // this.test1() // 错误

        Person.test1() // 正确
        Child.test1() // 正确
        Child.test2() // 正确
    }

    static test2() {
        console.log('静态方法2')
    }
}
var child1 = new Child('bingoogolapple', 'BGA')
child1.callParent()
child1.walk()
child1.name = '1111' // Cannot assign to 'name' because it is a read-only property

////////////////////////////////////////////////////////

class A {
    name: string
    // 构造参数加上修饰符后自动变为属性，但不建议这样写
    constructor(name: string, public aa: number, readonly bb: string) {
        this.name = name
    }
}

let a = new A('BGA', 28, 'xxxxx')
console.log(a.name)
console.log(a.aa)
console.log(a.bb)

////////////////////////////////////////////////////////

let passcode = 'ssssssss'
class B {
    private _fullName: string

    // Accessors are only available when targeting ECMAScript 5 and higher
    get fullName(): string {
        return this._fullName
    }

    // Accessors are only available when targeting ECMAScript 5 and higher
    // 处理方法，加上编译参数 tsc xxxx.ts --target es5
    set fullName(newName: string) {
        // this.fullName = newName // 必须加下划线，否则会栈溢出。RangeError: Maximum call stack size exceeded
        this._fullName = newName
    }
}
let b = new B()

b.fullName = 'Bob Smith'
console.log(b.fullName)

////////////////////////////////////////////////////////

class Grid {
    static origin = {x: 0, y: 0}

    scale: number

    constructor(scale: number) {
        this.scale = scale
    }

    calculateDistanceFromOrigin(point: {x: number, y: number}) {
        let xDist = point.x - Grid.origin.x
        let yDist = point.y - Grid.origin.y
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
    }
}
let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)
console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4}))
console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}))

////////////////////////////////////////////////////////

abstract class C {
    name: string
    constructor(name: string) {
        this.name = name
    }

    printName(): void {
        console.log('D name:' + this.name)
    }

    abstract printMeeting(): void
}

class C1 extends C {
    constructor(name: string) {
        super(name)
    }

    printMeeting(): void {
        console.log('C1 ' + this.name)
    }

    generateReport(): void {
        console.log('C1 generateReport')
    }
}

let cc: C
cc = new C1('C1C1')
console.log(cc.name)
cc.printName()
cc.printMeeting()

let cc1 = cc as C1
cc1.generateReport()

console.log('sssss')
