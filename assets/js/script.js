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
    

    let buttonCount = 0;

    for(buttonCount; buttonCount < 4; buttonCount++)
    {
      let newButton = document.createElement("button");
      newButton.className = "btn";
      newButton.id = "btn-" + buttonCount;
    }
    const btn0 = document.getElementById("btn-0");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");

    const mcButtonContainer = document.createElement("div");
    mcButtonContainer.className = "mc-button-container";
    mcButtonContainer.id = "mc-button-container";
}


startButtonEl.addEventListener("click", startQuiz);

