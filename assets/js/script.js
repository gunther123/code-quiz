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
    while(pageContentEl.firstChild){
        pageContentEl.removeChild(pageContentEl.firstChild);
    }

}


startButtonEl.addEventListener("click", startQuiz);

