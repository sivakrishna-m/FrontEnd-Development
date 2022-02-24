let timerEl = document.getElementById("timer");
let spanEl = document.getElementById("span");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let speedTypingTestEl = document.getElementById("speedTypingTest");
let spinnerEl = document.getElementById("spinner");


function getQuote() {
    speedTypingTestEl.classList.remove("d-none");
    spinnerEl.classList.add("d-none");

    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplayEl.textContent = jsonData.content;
        });
}

function speedTest() {
    let counter = 0;
    let inervalId = setInterval(function() {
        spanEl.textContent = counter;
        timerEl.textContent = "seconds";
        counter += 1;
    }, 1000);

    submitBtnEl.addEventListener("click", function() {
        let quote1 = quoteDisplayEl.textContent;
        let quote2 = quoteInputEl.value;

        if (quote1 === quote2) {
            let seconds = counter - 1;
            clearInterval(inervalId);
            resultEl.textContent = "You completed in " + seconds + " second";
        } else {
            resultEl.textContent = "You typed incorrect sentence";
        }
    });
}

getQuote();
speedTest();

resetBtnEl.addEventListener("click", function() {
    spinnerEl.classList.remove("d-none");
    speedTypingTestEl.classList.add("d-none");
    speedTest();
});

