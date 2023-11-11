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
var score = 0;
var currentAnswerChoices = questionBank[questionNumber].choices;
var main = document.children[0].children[1].children[3]
var olEl = document.createElement("ol");
var answersContainer = document.getElementById("answers-container");
var btn = document.createElement("button");
var timeLeft = 30

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
function loadBtn() {
    btn.remove();
    for (let i = 0; i < currentAnswerChoices.length; i++) {
        createButton(currentAnswerChoices[i]);
    }
    showQuestion();
}

function startButton() {
    btn.textContent = ("Start");
    main.appendChild(btn)
    answersContainer.textContent = ("How well do you remember these Pulp Fiction quotes? Guess which character from this list said what. Each correct answer will give you 5 points, but every answer you get wrong will cost you precious time!")
    btn.addEventListener("click", loadBtn);
};

    
    startButton();
    console.log(questionNumber);
    function showQuestion() {
        if (questionNumber <= 3) {
            showAnswers()
        } else {
            console.log("no more");
            // localStorage.setItem()
            olEl.remove();
            answersContainer.textContent = ("Nice job finishing!    Score: " + score + "     Click the link in the top corner to see how your score compares.")
    //         main.innerHTML += `
    //         <input id = "id" placeholder="enter initials">
    //         <button id="formbtn">Enter</button>`;
    //         document.getElementById('formbtn').addEventListener('submit', function(event) {
    //             event.preventDefault();
    //             var initials = document.getElementById('id').value;
    //             console.log(initials);
    //             console.log('hi');
    //             localStorage.setItem('initials', initials);
    // })}
    main.innerHTML += `
    <form id="myForm">
        <input id="id" placeholder="enter initials">
        <button type="submit">Enter</button>
    </form>`;

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var initials = document.getElementById('id').value;
    console.log(initials);
    localStorage.setItem(initials, score);
});
}}

function showAnswers() {
    var currentPrompt = questionBank[questionNumber].prompt;
    answersContainer.textContent = currentPrompt;
    console.log(questionNumber);
    var blank = ""
    answersContainer.textContent = (blank += currentPrompt);
}
document.getElementById('timer').textContent = (`timer:` + timeLeft);
function createButton(choice) {
    var choiceEl = document.createElement("button");
    choiceEl.textContent = choice;
    main.appendChild(olEl);
    olEl.appendChild(choiceEl);
    choiceEl.addEventListener("click", checkAnswer);
}

function checkAnswer(event) {
    console.log("The button was pressed!!")
    event.preventDefault()
    var response = document.getElementById("response");
    response.textContent = ("");
    console.dir(response)
    if (event.target.innerText === questionBank[questionNumber].answer) {
        response.textContent = ("Nice +5 pts");
        score = (score + 5);
        console.log(score);
    } else {
        response.textContent = ("Better luck next time -10 seconds");
        timeLeft - 10;
    } questionNumber++;
    showQuestion()
};

module.exports = score;
