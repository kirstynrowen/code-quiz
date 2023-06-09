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

const startBtn = document.getElementById('start-button');
const timerEl = document.getElementById('time-left');
const quizDisplay = document.getElementById('question-container');
const questionTxt = document.getElementById('questionTxt');
const answersContainer = document.getElementById('answers-container');
const scoreContainer = document.getElementById('score-container');
const highscoreContainer = document.getElementById('highscores-container');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');
const message = document.getElementById('message');
let currentQuestionIndex = 0;
let currentScore = 0;
let highScores = [];
let initialsEl = document.getElementById('initials');
let timer;
let timerCount = 30;

//event listener to call startQuiz function
startBtn.addEventListener('click', startQuiz);

//function to start the quiz
function startQuiz() {
    quizDisplay.classList.remove('hide');
    startBtn.classList.add('hide');
    startTimer();
    displayQuestion();
}

//display current question
function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionTxt.textContent = currentQuestion.question;
    // fixing answers display issue: remove previous choices from page
    answersContainer.innerHTML = '';
    // loop through answer options and create button element for each
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        let userChoice = currentQuestion.choices[i];
        let choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('value', userChoice);
        choiceBtn.textContent = userChoice;
        answersContainer.appendChild(choiceBtn);
    }
}

function checkAnswer(event) {
    let selectedBtn = event.target;
    if (selectedBtn.value !== questions[currentQuestionIndex].correct) {
        timerCount -= 5;
        message.textContent = 'Incorrect!'
        message.setAttribute('style','color: #ff0000');
    } else {
        message.textContent = 'Correct!';
        message.setAttribute('style','color: #009e02');
        currentScore ++
    }

    currentQuestionIndex ++

    if (timerCount <= 0 || currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
// console.log(currentScore);
}
answersContainer.onclick = checkAnswer;

function endQuiz() {
    // stop timer and hide
    clearInterval(timer);
    timerEl.classList.add('hide');
    // hide questions section and show scores section
    quizDisplay.classList.add('hide');
    scoreContainer.classList.remove('hide');
    document.getElementById('final-score').textContent = 'Your final score is: ' + currentScore + '/5';
}

submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    const finalScore = {
        userInitials: initialsEl.value.trim(),
        finalTime: 30 - timerCount,
        currentScore, 
    };
    highScores.push(finalScore);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    showScores();
})

function showScores() {
    highscoreContainer.classList.remove('hide');
    const storedScores = JSON.parse(localStorage.getItem('highScores'));
    const scoresList = document.getElementById('all-scores');
    scoresList.innerHTML = '';
    initialsEl.value = '';
    if (storedScores != null) {
        for (let i = 0; i < storedScores.length; i++) {
            let newScore = document.createElement('li');
            newScore.textContent = storedScores[i].userInitials + ' scored ' + storedScores[i].currentScore + '/5 in ' + storedScores[i].finalTime + ' seconds';
            scoresList.appendChild(newScore);
          }    
        }
};

//reset quiz data
restartBtn.addEventListener('click', function() {
    timerCount = 30;
    currentScore = 0;
    currentQuestionIndex = 0;
    timerEl.classList.remove('hide');
    scoreContainer.classList.add('hide');
    message.textContent = '';
    startQuiz();
})

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
