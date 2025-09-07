let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let correctEl = document.getElementById("correct-el");

function increment() {
    count += 1;
    console.log(`The button was clicked, the count equals: ${count}`);
    countEl.innerText = count;
}

function correct() {
    if (count === 50) {
        console.log("the amount is correct");
        correctEl.innerText = "Correct amount of passengers is 50, good Job!";
    }
}

function save() {
    console.log(`The count ${count} was saved!`);
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.innerText = 0;
    count = 0;
}