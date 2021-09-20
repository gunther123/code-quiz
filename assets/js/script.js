//References to html divs
const pageContentEl = document.getElementById("page-content");
const questionHeaderEl = document.getElementById("question-header");
const questionContainerEl = document.getElementById("question-container");
const startButtonContainerEl = document.getElementById("start-button-container");
const startButtonEl = document.getElementById("start-btn");
let timerEl = document.getElementById("timer-text");

//Variables question score and count down timer
let score = 0;
let timer = 99;
let questionCount = 0;

//Setting timer text to timer variable

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
    //Remove HTML divs that are not used in the Quiz section
    pageContentEl.removeChild(questionContainerEl);
    pageContentEl.removeChild(startButtonContainerEl);

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
    updateQuestion();
    
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

}

pageContentEl.addEventListener("click", buttonHandler);




