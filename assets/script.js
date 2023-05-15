
//array of objects of questions/answers
const questions = [
    {
        question: 'How do we get the first element in an array?',
        a: '[0]',
        b: '[1]',
        c: '(0)',
        d: '(1)',
        correct: 'a',
    },
    {
        question: 'What does the "push" method do?',
        a: 'adds new element to beginning of array',
        b: 'copies an array',
        c: 'adds new element to end of array',
        d: 'other',
        correct: 'c',
    },
    {
        question: ' In which HTML element do we link the JavaScript code?',
        a: '<js>',
        b: '<javascript>',
        c: '<script>',
        d: '<scripting',
        correct: 'c',
    },
    {
        question: 'Which of these is a useful tool for debugging JavaScript code?',
        a: 'if/else statements',
        b: 'console.lo',
        c: 'for loops',
        d: 'while loops',
        correct: 'b',
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        a: '(comment)',
        b: '//comment',
        c: '<!-- comment -->',
        d: '/* comment */',
        correct: 'b',
    },
];
console.log(questions);
const startBtn = document.getElementById('start-button');
const timerEl = document.getElementById('time-left');
const quizDisplay = document.getElementById('question-container');
const questionTxt = document.getElementById('questionTxt');
const optionA = document.getElementById('optA');
const optionB = document.getElementById('optB');
const optionC = document.getElementById('optC');
const optionD = document.getElementById('optD');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');

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
}

//display current question and move to next question
function displayQuestion() {
    
}

//function to end quiz
function endQuiz() {

}

//function to update timer
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
//     setInterval function to decrement time and update, HTML element to display time left
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

