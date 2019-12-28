interface Card {
    suit: string
    card: number
}
interface Deck {
    suits: string[]
    cards: number[]

    createCardPicker(this: Deck): () => Card
}

let deck1 = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)
            console.log(this) // Object [global]  此时的 this 是指调用方，全局的 global
            return {
                suit: this.suits[pickedSuit], // TypeError: Cannot read property '2' of undefined
                card: pickedCard % 13
            }
        }
    }
}
let cardPcker1 = deck1.createCardPicker()
// let pickedCard1 = cardPcker1()
// console.log('card1 ' + pickedCard1.card)

let deck2 = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        // 箭头函数的 this 是创建该函数时的 this，也就是 deck2
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)
            console.log(this) // 此时的 this 是指 deck2，但是此时不能推断类型，所以用 ts 写 deck3
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
}
let cardPcker2 = deck2.createCardPicker()
let pickedCard2 = cardPcker2()
console.log('card2 ' + pickedCard2.card)

let deck3: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        // 箭头函数的 this 是创建该函数时的 this，也就是 deck3: Deck
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)
            console.log(this) // 此时的 this 是指 deck3
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
}
let cardPcker3 = deck3.createCardPicker()
let pickedCard3 = cardPcker3()
console.log('card3 ' + pickedCard3.card)

////////////////////////////////////////////////////////

interface UiElement {
    addClickListener(onClick: (this: void, e: string) => void): void
}
class Handler {
    type: string
    onClickBad1(this: Handler, type: string) {
        this.type = type
    }
    // 使用箭头函数类实现既想满足接口约定，又能访问当前类的 this
    onClickBad2 = (type: string) => {
        this.type = type
        console.log(this.type)
    }
}
let h = new Handler()
let uiElement: UiElement = {
    addClickListener(onClick: (this: void, type: string) => void) {
        onClick('test')
    }
}
uiElement.addClickListener(h.onClickBad2)