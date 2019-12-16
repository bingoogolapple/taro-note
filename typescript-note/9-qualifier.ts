/**
 * TypeScript 中的类的修饰符
 *
 * 1、public、private、protected
 * 2、public 修饰的属性或方法是共有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * 3、private 修饰的属性或方法是私有的，不能再声明他的类的外部访问
 * 4、protected 修饰的属性或方法是受保护的，当前类和子类可以访问
 */

class Person {
    name = 'BGA'
    private age = 28
    protected sex = '男'
    walk() {
        console.log(`${this.name} ${this.sex} ${this.age} 正在走路`)
    }

    static test1() {
        console.log('静态方法1')
    }
}

var person1 = new Person()
person1.walk()
console.log(person1.name)
console.log(person1.age) // Property 'age' is private and only accessible within class 'Person'
console.log(person1.sex) // Property 'sex' is protected and only accessible within class 'Person' and its subclasses

class Child extends Person {
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

        // test() // 错误
        // this.test() // 错误

        Person.test1() // 正确
        Child.test1() // 正确
        Child.test2() // 正确
    }

    static test2() {
        console.log('静态方法2')
    }
}
var child1 = new Child()
child1.callParent()
child1.walk()
