//References to html divs
const pageContentEl = document.getElementById("page-content");
const questionHeaderEl = document.getElementById("question-header");
const questionContainerEl = document.getElementById("question-container");
const startButtonContainerEl = document.getElementById("start-button-container");
const startButtonEl = document.getElementById("start-btn");

// Get the modal
var modal = document.getElementById("high-score-modal");

// Get the button that opens the modal
var highScoreBtn = document.getElementById("high-score-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// when user clicks high score buton 
highScoreBtn.onclick = function() {
    modal.style.display = "block";
  }
  
  // Close high score modal by clicking on the X
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // Close high score modal if clicking outside the modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

//Variables question score and count.
let score = 0;
let questionCount = 0;

//Set Timer Variables
let timer = 5;
let timerEl = document.getElementById("timer-count");
let timerID;
timerEl.innerHTML = timer;

    
//Define Timer Countdown
let timerCountdown = function(){
    if (timer <= 0){
        clearInterval(timerID);
        timerEl.innerHTML = "0"
        endQuiz();
    }
    else{
        timerEl.innerHTML = timer;
        timer--;
    }
    }

//Defining local storage
let myStorage = window.localStorage;

//Variables for questions, guesses, and answers
const q0 = {
    question: "What variable type allows you to store true or false values?",
    a: "A. Boolean",
    b: "B. Integer",
    c: "C. String",
    d: "D. Array",
    answer: "A. Boolean"
}

const q1 = {
    question: "Commonly used data types DO NOT include:",
    a: "A. Strings",
    b: "B. Booleans",
    c: "C. Numbers",
    d: "D. Alerts",
    answer: "D. Alerts"
}
const q2 = {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    a: 'A. <script src="xxx.js"',
    b: 'B. <script name="xxx.js">',
    c: 'C. <script href="xxx.js">',
    d: 'D. None of the above',
    answer: 'A. <script src="xxx.js"'
}

const q3 = {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "A. <javascript>",
    b: "B. <scripting>",
    c: "C. <script>",
    d: "D. <js>",
    answer: "C. <script>"
}

// Array of all questions
const questions = [q0, q1, q2, q3];

//Starts the Quiz
const startQuiz = function(){
    //Start Countdown
    timerID = setInterval(timerCountdown, 1000);
    
    //Remove HTML divs that are not used in the Quiz section
    pageContentEl.removeChild(questionContainerEl);
    pageContentEl.removeChild(startButtonContainerEl);

    //Create Quiz
    createQuiz();
}

//Generate Quiz HTML
const createQuiz = function(){
    //Getting reference to the Question header
    let questionHeaderTextEl = document.getElementById("question-header-text");
    questionHeaderTextEl.textContent = questions[questionCount].question;
    
    //Creating buttons for the Quiz
    let btn0El = document.createElement("button");
    btn0El.className = "btn";
    btn0El.id = "btn-0";
    btn0El.textContent = questions[questionCount].a;

    let btn1El = document.createElement("btn-1");
    btn1El.className = "btn";
    btn1El.id = "btn-1";
    btn1El.textContent = questions[questionCount].b;

    let btn2El = document.createElement("btn-2");
    btn2El.className = "btn";
    btn2El.id = "btn-2";
    btn2El.textContent = questions[questionCount].c;

    let btn3El = document.createElement("btn-3");
    btn3El.className = "btn";
    btn3El.id = "btn-3";
    btn3El.textContent = questions[questionCount].d;

    //Create div button container
    let mcButtonContainerEl = document.createElement("div");
    mcButtonContainerEl.className = "mc-button-container";
    mcButtonContainerEl.id = "mc-button-container";

    //Create question answers container(for flex purposes)
    const questionAnswersContainerEl = document.createElement("div");
    questionAnswersContainerEl.className = "question-answers-container";
    questionAnswersContainerEl.id = "question-answers-container";

    //Adding children to Main Element
    pageContentEl.appendChild(questionAnswersContainerEl);
    questionAnswersContainerEl.appendChild(mcButtonContainerEl);
    mcButtonContainerEl.appendChild(btn0El);
    mcButtonContainerEl.appendChild(btn1El);
    mcButtonContainerEl.appendChild(btn2El);
    mcButtonContainerEl.appendChild(btn3El);
}

const updateQuestion = function(){
    //Getting References to the HTML
    let questionHeaderTextEl = document.getElementById("question-header-text");
    let btn0El = document.getElementById("btn-0");
    let btn1El = document.getElementById("btn-1");
    let btn2El = document.getElementById("btn-2");
    let btn3El = document.getElementById("btn-3");

    //Update Question Text
    questionHeaderTextEl.textContent = questions[questionCount].question;

    //Update Answer's Text
    btn0El.textContent = questions[questionCount].a;
    btn1El.textContent = questions[questionCount].b;
    btn2El.textContent = questions[questionCount].c;
    btn3El.textContent = questions[questionCount].d;
}

const assessAnswer = function(a){
    //Correct Answer
    if(a === questions[questionCount].answer){
        alert("Correct!");
        score+= 10;
        console.log(score);
        questionCount++;
    }
    //Incorrect Answer
    else{
        alert("Incorrect! Deducting 10 seconds!");
        timer-= 10;
        console.log(timer);
        timerEl.textContent = timer;
        questionCount ++;
    } 

    //Logic to check if all questions have been answered
    if(questionCount < 4){
        updateQuestion();
    }
    else{
        endQuiz();
    }
}

const endQuiz = function(){
    //Reference HTML Elements that are not global
    let questionAnswersContainerEl = document.getElementById("question-answers-container");
    //Remove Question Buttons
    pageContentEl.removeChild(questionAnswersContainerEl);

    //Update Question Header
    let questionHeaderTextEl = document.getElementById("question-header-text");
    questionHeaderTextEl.textContent = "All Done!"

    //Create Question Text Div
    let questionContainerEl = document.createElement("question-container");
    questionContainerEl.id = "question-container";
    questionContainerEl.className = "question-container";

    //Create Question Text P Element
    let questionTextEl = document.createElement("p");
    questionTextEl.className = "question-text";
    questionTextEl.id = "question-text";
    questionTextEl.textContent = "Your final score is " + score;

    //Create New HTML Elements
    //Create High Score Form Div
    let formButtonContainerEl = document.createElement("div")
    formButtonContainerEl.className = "form-button-container" ;
    formButtonContainerEl.id = "form-button-container";

    //Create High Score Form
    let highScoreNameEl = document.createElement("form");
    highScoreNameEl.className = "high-score-name";
    highScoreNameEl.id = "high-score-name";

    //Create Form Label
    let highScoreLabelEl = document.createElement("label");
    highScoreLabelEl.htmlFor = "high-score-name-text";
    highScoreLabelEl.className = "question-text";
    highScoreLabelEl.textContent = "Enter your Initials:";

    //Create Form Input
    let highScoreInputEl = document.createElement("input");
    highScoreInputEl.type = "text";
    highScoreInputEl.name = "high-score-name-text";
    highScoreInputEl.className = "high-score-name-text";
    highScoreInputEl.id = "high-score-name-text";

    //Create Form Submit Button
    let formSubmitButton = document.createElement("button");
    formSubmitButton.type = "submit";
    formSubmitButton.className = "submit-btn";
    formSubmitButton.textContent = "Submit";

    //Append New Elements to Parent
    //Appending Question Container
    pageContentEl.appendChild(questionContainerEl);
    questionContainerEl.appendChild(questionTextEl);

    //Appending Form
    pageContentEl.appendChild(formButtonContainerEl);
    formButtonContainerEl.appendChild(highScoreNameEl);
    highScoreNameEl.appendChild(highScoreLabelEl);
    highScoreNameEl.appendChild(highScoreInputEl);
    highScoreNameEl.appendChild(formSubmitButton);
}

const recordScore = function(){
    event.preventDefault()

    let initials = getElementById("high-score-name-text").value;
    


}

//Handle all button clicks on the page
const buttonHandler = function(){
    var targetEl = event.target;

    if(targetEl.matches("#start-btn")){
        startQuiz();
    }
    else if (targetEl.matches("#btn-0") || targetEl.matches("#btn-1") || targetEl.matches("#btn-2") || targetEl.matches("#btn-3") ){
        console.dir(targetEl);
        let a = targetEl.innerText;
        assessAnswer(a);
    }
    else if(targetEl.matches("#submit-btn")){
        recordScore();
        resetQuiz();
    }

}

pageContentEl.addEventListener("click", buttonHandler);