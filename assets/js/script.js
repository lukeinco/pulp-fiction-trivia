var questionNumber = 0;

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
function showQuestion() {
    // select the HTML element where I want the question to be
    // i need an html element with an id and select it with querySelector
    // get the currentQuestion with count or questionNumber
    var currentPrompt = questionBank[questionNumber].prompt
    showAnswers()
}
function showAnswers() {
    // answers is an array, because I have multiple
    // Select the HTML element where I want to populate my answers
    // it will also need an id and I will select it
    var answersContainer = document.getElementById("answers-container");
    answersContainer.appendChild()
    console.log(answersContainer)
    // empty the container
    // populate it
    var currentAnswerChoices = questionBank[questionNumber].choices
    console.log("These are my choices")
    console.log(currentAnswerChoices)
    // iterate through currentAnswerChoices,
    console.log("about to iterate through my choices")
    function createButton(choice) {
        var choiceEl = document.createElement("button");
        choiceEl.textContent = choice;
        console.log("This is a button!")
        console.log(choiceEl)
        choiceEl.addEventListener("click", checkAnswer);
        answersContainer.append(choiceEl)
    }

    for (let i = 0; i < currentAnswerChoices.length; i++) {
        createButton(currentAnswerChoices[i]);
    }

    // create an Element for each choice
    // ol.appendChild(choiceEl);
    //
}

function checkAnswer(event) {
    console.log("The button was pressed!!")
    event.preventDefault()
    console.log(event)
    console.log(event.target)
    console.dir(event.target)
    // if correct, add points
    // else incorrect, subtract time
    // move to next question
    // questionNumber ++
    // showQuestion()
}

// display homepage with start button
// CSS centered
// red/yellow/black nav bar
// JS start button starts timer
// start button shows questions
// HTML view highscores
// timer
// JS questions have a correct answer
// message displayed for a short time
// if won 'good job' for 3 seconds + 5 points
// if lost 'Nope! Try again next time.' - 5 seconds
// display next questions
//
// highscores.hmtl updated with score

var questionBank = [
    {
        prompt: "Oh you're upset??? Well I'm a mushroom cloud laying motherf-----, motherf-----!",
        answer: "Jules",
        choices: [ "Jules", "Vincent", "Marcellus", "Mia", "Butch"]
    }, {
        prompt: "String to show question as 2222",
        answer: "C",
        choices: ["Jules", "Vincent", "Marcellus", "Mia", "Butch"]
    }, {
        prompt: "String to show question as 33333",
        answer: "54",
        choices: ["Jules", "Vincent", "Marcellus", "Mia", "Butch"]
    }, {
        prompt: "String to show question as 4444",
        answer: "Aas",
        choices: ["Jules", "Vincent", "Marcellus", "Mia", "Butch"]
    }
]

var paragraph = document.children[0].children[1].children[2];
var ol = document.children[0].children[1].children[3].children[0];
var count = 0;
console.log(paragraph)
console.dir(paragraph)
// button


// for (let i = 0; i < characters.length; i++) {
//     button(characters[i]);
// }

ol.children[0]

// quotes
// function populateQuestion(x) {
//     paragraph.textContent = (x);
// }


// question(quotes[count]);
showAnswers()