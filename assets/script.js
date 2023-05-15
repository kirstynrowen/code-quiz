//array of objects of questions/answers
const questions = [
    {
        question: 'How do we get the first element in an array?',
        choices: [
            'A. [0]', 
            'B. [1]', 
            'C. (0)', 
            'D. (1)'],
        correct: 'A. [0]',
    },
    {
        question: 'What does the "push" method do?',
        choices: [
            'A. Adds new element to beginning of array', 
            'B. Copies an array', 
            'C. Adds new element to end of array', 
            'D. Deletes an array',
        ],
        correct: 'C. Adds new element to end of array',
    },
    {
        question: ' In which HTML element do we link the JavaScript code?',
        choices: [
            'A. <js>', 
            'B. <javascript>', 
            'C. <script>', 
            'D. <scripting>',
        ],
        correct: 'C. <script>',
    },
    {
        question: 'Which of these is a useful tool for debugging JavaScript code?',
        choices: [
            'A. if/else statements', 
            'B. console.log', 
            'C. for loops', 
            'D. while loops'],
        correct: 'B. console.log',
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        choices: [
            'A. (comment)', 
            'B. //comment', 
            'C. <!-- comment -->', 
            'D. /* comment */'],
        correct: 'B. //comment',
    },
];
console.log(questions);
const startBtn = document.getElementById('start-button');
const timerEl = document.getElementById('time-left');
const quizDisplay = document.getElementById('question-container');
const questionTxt = document.getElementById('questionTxt');
const answersContainer = document.getElementById('answers-container');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');

let currentQuestionIndex = 0;
let currentScore = 0;
let highScores = [];
let timer;
let timerCount = 60;

//event listener to call startQuiz function
startBtn.addEventListener('click', startQuiz);

//function to start the quiz
function startQuiz() {
    quizDisplay.classList.remove('hide');
    startTimer();
    displayQuestion();
}

//display current question
function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionTxt.textContent = currentQuestion.question;
    // loop through answer options and create button element for each
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        let userChoice = currentQuestion.choices[i];
        let choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('value', userChoice);
        choiceBtn.classList.add('choice');
        choiceBtn.textContent = choice;
        answersContainer.appendChild(choiceBtn);
    }
}

function checkAnswer(event) {
    let selectedBtn = event.target;
    if (selectedBtn.value !== questions[currentQuestionIndex].correct) {
        time -= 10;
    } else {
        score ++
    }
}
answersContainer.onclick = checkAnswer();
//function to start timer
//   decrements time and prints current time left to timerEL HTML element
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = 'Time Left: ' + timerCount;

      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        timerEl.textContent = 'Time is up!';
        endQuiz();
      }
    }, 1000);
  }

// WHEN I answer a question
//     selectable answer buttons
// THEN I am presented with another question
//     show/hide HTML elements with CSS?
// WHEN I answer a question incorrectly
//     Need some way to verify question answers
// THEN time is subtracted from the clock
//     decrement time by 10 seconds?
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
//     gameOver function
// WHEN the game is over
// THEN I can save my initials and my score
//     local storage

