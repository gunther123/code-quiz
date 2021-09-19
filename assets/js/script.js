//References to html divs

const pageContentEl = document.getElementById("page-content");
const questionHeaderEl = document.getElementById("question-header");
const questionContainerEl = document.getElementById("question-container");
const startButtonContainerEl = document.getElementById("start-button-container")
const startButtonEl = document.getElementById("start-btn")

//variables question score and count down timer
const score = 0;
const timer = 99;

const startQuiz = function(){
    pageContentEl.removeChild(questionContainerEl);
    pageContentEl.removeChild(startButtonContainerEl);

    createQuiz();

}

const createQuiz = function(){
    const questionHeaderTextEl = document.getElementById("question-header-text");
    questionHeaderTextEl.textContent = "What variable type allows you to store true or false values?"
    
    const btn0El = document.createElement("button");
    btn0El.className = "btn";
    btn0El.id = "btn-0";
    btn0El.textContent = "placeholder"
    const btn1El = document.createElement("btn-1");
    btn1El.className = "btn";
    btn1El.id = "btn-1";
    const btn2El = document.createElement("btn-2");
    btn2El.className = "btn";
    btn2El.id = "btn-2";
    const btn3El = document.createElement("btn-3");
    btn3El.className = "btn";
    btn3El.id = "btn-3";

    const mcButtonContainerEl = document.createElement("div");
    mcButtonContainerEl.className = "mc-button-container";
    mcButtonContainerEl.id = "mc-button-container";

    const questionAnswersContainerEl = document.createElement("div");
    questionAnswersContainerEl.className = "question-answers-container";
    questionAnswersContainerEl.id = "question-answers-container";

    pageContentEl.appendChild(questionAnswersContainerEl);
    questionAnswersContainerEl.appendChild(mcButtonContainerEl);
    mcButtonContainerEl.appendChild(btn0El);
    mcButtonContainerEl.appendChild(btn1El);
    mcButtonContainerEl.appendChild(btn2El);
    mcButtonContainerEl.appendChild(btn3El);
}


startButtonEl.addEventListener("click", startQuiz);

