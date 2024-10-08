let welCome= document.getElementById("wel-come")

function sayHello(){
let name = prompt ("Enter your name")
let greeting = "Hello👋, " +name + "." + " Welcome to Countify, where efficient counting is made simple."
welCome.textContent= greeting
}
sayHello()

let countEr= document.getElementById("count-er")
let saveEl= document.getElementById("save-el")
let count = 0

function increment() {
    count += +1
    countEr.textContent= count
}
function decrement() {
    count += -1
    countEr.textContent= count
}
function save() {
   console.log(saveEl)
   let countStr = count + "-"
   saveEl.textContent += countStr
   countEr.textContent = 0
   count = 0
}
let num1 = prompt("Enter number");
    let num2 = prompt("Enter number");
    let sumEl= document.getElementById("sum-el")
    document.getElementById("number-1").textContent = num1;
    document.getElementById("number-2").textContent = num2;

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}
function add() {
    let num1 = prompt ("Enter number")
let num2 = prompt ("Enter number")
    let result = num1 + num2
    sumEl.textContent += result
}
function add() {
    let num1 = prompt ("Enter number")
let num2 = prompt ("Enter number")
    let result = num1 + num2
    sumEl.textContent += result
}
