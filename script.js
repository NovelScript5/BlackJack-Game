let firstCard
let secondCard
let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
message = ""
Emoji = "" 
let Player = document.getElementById("Player")
let PlayerObject = {
    Name : "Kumarbaz Herif",
    chips: 145,
    sayHello: function() {
        console.log("Heisann")
    }
}
PlayerObject.sayHello()
Player.innerHTML = PlayerObject.Name + " $" + PlayerObject.chips
let Script = document.getElementById("Script")
let ScriptEmoji = document.getElementById("ScriptEmoji")
//let Sum = document.getElementById("Sum")
let Sum = document.querySelector(".scriptSum")
let Cards = document.getElementById("Cards")

console.log(cards)


function StartGame() {
    
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    isAlive = true
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    Cards.innerHTML = "Cards: "

    for(let i = 0; i < cards.length; i += 1 ) {
        Cards.innerHTML += cards[i] + " "
    }

    if (sum <= 20) { 
        message = "Do you want to draw a new card ?"
        Emoji = "😣"
    } else if (sum === 21) {
        message = "You've got the Blackjack"
        Emoji = "🎉"
        hasBlackJack = true
    } else {
        message = "You're out of the game..."
        Emoji = "😔"
        isAlive = false
    }
    
    Script.innerHTML = message
    ScriptEmoji.innerHTML = Emoji
    Sum.innerHTML = "Sum: " + sum

}

function NewCard() {

    if (isAlive === true && hasBlackJack === false) {
        let thirdcard = getRandomCard()
        Result = sum += thirdcard
        cards.push(thirdcard)
        console.log("Drawing a new card")
    }

    renderGame()
}

function getRandomCard() {
    let RandomNumber = Math.floor(Math.random() * 13) + 1

    if (RandomNumber > 10) {
        return 10
    } else if (RandomNumber === 1) {
        return 11
    } else {
        return RandomNumber
    }
}


function Refresh() {
 
    for (let i = 0; i < cards.length; i += 1) {
        cards[i] = 0
    }
    cards = []
    sum = 0
    Script.innerHTML = "Want to play a round?"
    Cards.innerHTML = "Cards: "
    Sum.innerHTML = "Sum: "
}
