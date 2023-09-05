// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');

let randomNum = 0;
let response = "";

// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
    let html = /*HTML*/ `
    <div>
    <p>Prøv å gjette riktig nummer fra 1 til 10: </p>
    <input id="user-input" type="number" onchange="checkNumber()">
    <button onclick="reset()">Reset</button>
    <p>${response}</p>
    </div>
    `
    app.innerHTML = html
}



// CONTROLLER ///////////////////////////////////////////////////////////////////////////

// Generates random number
function generateRandomNumber() {
    randomNum = Math.floor(Math.random() * 10 + 1)
}
generateRandomNumber()

// Compares the USER INPUT with RANDOM NUMBER
function checkNumber() {
    let userInput = document.getElementById('user-input').value;


    if (userInput == randomNum) {
        response = "RIKTIG! "
        setTimeout(hippHippHurra, 250)
        intervalId = setInterval(hippHippHurra, 3000)
    } else if (userInput < randomNum) {
        response = "For lavt..."
    } else if (userInput > randomNum) {
        response = "For høyt..."
    } else {response = "Det oppstod en feil..."}
    updateView()
}

// Resets game
function reset() {
    randomNum = 0;
    response = "";
    clearInterval(intervalId)

    generateRandomNumber()
    updateView()
}

// Victory text that will display after winning
function hippHippHurra() {
    setTimeout(hipp, 250)
    setTimeout(hipp, 500)
    setTimeout(hurra, 1500)

}
function hipp() {
    response += "hipp... "
    updateView()
}
function hurra() {
    response += "HURRA! "
    updateView()
}