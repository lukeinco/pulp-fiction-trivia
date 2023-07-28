var questionBank = [
    {
        prompt: "Oh you're upset??? Well I'm a mushroom cloud laying motherf-----, motherf-----!",
        answer: "Jules",
        choices: [
            "Jules",
            "Vincent",
            "Marcellus",
            "Mia",
            "Butch"
        ]
    }, {
        prompt: "Zedd's dead baby, Zedd's dead.",
        answer: "Butch",
        choices: [
            "Jules",
            "Vincent",
            "Marcellus",
            "Mia",
            "Butch"
        ]
    }, {
        prompt: "A Big Mac's still a Big Mac except they call it Le Big Mac.",
        answer: "Vincent",
        choices: [
            "Jules",
            "Vincent",
            "Marcellus",
            "Mia",
            "Butch"
        ]
    }, {
        prompt: "What country you from? What?! What aint no country I ever heard of. They speak english in What?",
        answer: "Jules",
        choices: [
            "Jules",
            "Vincent",
            "Marcellus",
            "Mia",
            "Butch"
        ]
    }
]

var questionNumber = 0;
var currentAnswerChoices = questionBank[questionNumber].choices;
var ol = document.children[0].children[1].children[3].children[0];

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
showQuestion();
function showQuestion() {

    // i need an html element with an id and select it with querySelector
    // get the currentQuestion with count or questionNumber
    showAnswers()
}
function showAnswers() {
    // answers is an array, because I have multiple
    // Select the HTML element where I want to populate my answers
    // it will also need an id and I will select it
    var currentPrompt = questionBank[questionNumber].prompt;
    var answersContainer = document.getElementById("answers-container");
    answersContainer.textContent = currentPrompt;
    // answersContainer.appendChild();
    console.log(questionNumber);
    var blank = ""
    answersContainer.textContent = (blank += currentPrompt);
    // populate it
    
    
}
function createButton(choice) {
    var choiceEl = document.createElement("button");
    choiceEl.textContent = choice;
    ol.appendChild(choiceEl)
    // console.log(choiceEl)
    choiceEl.addEventListener("click", checkAnswer, showAnswers);

}

for (let i = 0; i < currentAnswerChoices.length; i++) {
    createButton(currentAnswerChoices[i]);
}


function checkAnswer(event) {
    console.log("The button was pressed!!")
    event.preventDefault()
    var response = document.getElementById("response");
    response.textContent = ("");
    console.dir(response)
    if (event.target.innerText === questionBank[questionNumber].answer){
    response.textContent = ("Nice +5 pts");
    } else {
    response.textcontent = ("Better luck next time -20 seconds");
    }
    
    // if correct, add points
    // else incorrect, subtract time
    // move to next question
    questionNumber++;
    showQuestion()
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


// console.log(paragraph)
// console.dir(j)
// button


// for (let i = 0; i < characters.length; i++) {
//     button(characters[i]);
// }

// ol.children[0]

// quotes
// function populateQuestion(x) {
//     paragraph.textContent = (x);
// }


// question(quotes[count]);
// showAnswers()
