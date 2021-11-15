// document.getElementById("count-el").innerText = 5;
// let count = 0;
// console.log(count);

// function increment() {
//     console.log("The button was clicked");
// }

//initialize
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerHTML = count;
}

function save() {
    console.log(count);
}