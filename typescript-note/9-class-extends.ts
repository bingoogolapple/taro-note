class Greeter {
    greeting: string

    constructor(message: string) {
        this.greeting = message
    }

    greet() {
        return 'Hello, ' + this.greeting
    }
}

let greeter = new Greeter('world')
console.log(greeter.greet())

////////////////////////////////////////////////////////

class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 0) {
        console.log(`${this.name} Animal moved ${distance}`)
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    bark() {
        console.log('Woof')
    }
}
class Snake extends Animal {
    constructor(name: string) {
        super(name)
    }
    move(distance: number = 5) {
        console.log('Slithering...')
        super.move(distance)
    }
}
class Horse extends Animal {
    constructor(name: string) {
        super(name)
    }
    move(distance: number = 45) {
        console.log('Galloping...')
        super.move(distance)
    }
}
const dog = new Dog('')
dog.bark()
dog.move(10)

let sam = new Snake('Sammy')
sam.move()
let tom: Animal = new Snake('sss')
tom.move(10)

////////////////////////////////////////////////////////

class D {
    static standGreeting = 'Hello, there'
    greeting: string
    constructor(message?: string) {
        this.greeting = message
    }

    greet() {
        if (this.greeting) {
            return 'Hello, ' + this.greeting
        } else {
            return D.standGreeting
        }
    }
}

let d1: D
d1 = new D()
console.log(d1.greet())
D.standGreeting = 'aaaaaaaaaa'
console.log(d1.greet())
d1 = new D('world')
console.log(d1.greet())

let dMaker: typeof D = D
dMaker.standGreeting = 'bbbbbbbbbbbb'
let d2: D = new dMaker()
console.log(d2.greet())

////////////////////////////////////////////////////////

// 类可见当接口使用，但是一般不这样用
// interface Point {
class Point {
    x: number
    y: number
}
interface Point3D extends Point {
    z: number
}
let point3d: Point3D = { x: 1, y: 1, z: 1 }