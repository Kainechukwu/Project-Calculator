// $(".btn").click(function(){
//   var buttonHTML = this.innerHTML;
//   $("result").text(buttonHTML);
//
// })
// var action = e.dataset.action;
// if(!action){
//   alert(k.value);
// }
// var key = e.target.value;
// var action = key.dataset.action;
// var displayContent = input.value;
//
// var buffer;
// var symbol;
// var newNumber;
//
// $("body").css("background-color", "#e0ece4");
// var operator = $(".operator");
// var numKeys = $(".numBtn");
// var equals = $("#equals");
// var input = document.getElementById("viewPort");
//
// numKeys.click(function(){
//   if(newNumber ){
//     input.value = this.value;
//     newNumber = false;
//   }else{
//     input.value += this.value;
//   }
//
// });
//
//
// operator.click(function(e){
//   buffer = input.value;
//   symbol = e.target.value;
//   newNumber = true;
//   console.log(`Symbol: ${symbol}, Buffer: ${buffer}`);
// });
//
// equals.click(function(){
//   var result = calculate(parseInt(buffer), parseInt(input.value),lk, symbol);
//   input.value = result;
//   newNumber = true;
//   console.log(`Result: ${result}, input.value ${input.value}`);
// });
//
//
// function calculate(num1, num2, operator){
//   if (operator === "+"){
//     return  num1 + num2;
//   }
// }

//projulator issues
//decimal, equals after first click,operator clicked before equals clicked when buffer and input value are undefined

//Calculator page background style
// $("body").css("background-color", "#e0ece4");
//
// //query for input
var input = document.getElementById("viewPort");
var numKeys = $(".numBtn");
var operator = $(".operator");
var equals = $("#equals");
var deL = $(".del");
var clear = $(".C");
var cE = $(".CE");
var newNumber;
var buffer, buffer2;
var result;
var equalsClickOnce = true;
var polar = $(".polar");
var decimal= $(".dec");

var equalsPressed;
// var key = e.target;
// var action = key.dataset.action;


input.value = "0";
newNumber = true;
//all button style
var allBtn = $(".btn");
allBtn.hover(function(e) {
  // var biga = e.target.value;
  $(this).addClass(".btnHover");
});

// numKeys.keydown(function(event){
//   input.value = event.key.value;
// });



//What happens when you click the number keys
numKeys.click(function() {

  if (newNumber) {
    input.value = this.value;
    equalsPressed = false;
    newNumber = false;
  } else {
    input.value += this.value;
  }
});

//What happens when you click an operator.
operator.click(function(e) {
  buffer = input.value;
  symbol = e.target.value;
  newNumber = true;

});

//What happens when we click decimal
decimal.click(function dcm(e){
  if (!input.value.includes(".")){
    input.value = input.value + ".";
    newNumber = false;
  }
  if(newNumber === true && buffer === input.value){
    input.value = "0" + ".";
    newNumber = false;
  }

});



//What happens when you click equals-to
equals.click(function() {

  if (equalsPressed) {
      result = calculate(parseFloat(input.value), parseFloat(buffer2), symbol);
  }
  else {
    buffer2 = input.value;
    result = calculate(parseFloat(buffer), parseFloat(buffer2), symbol);
    equalsPressed = true;
  }


  input.value = result;

  newNumber = true;


});



//What happens when you click polar
polar.click(function() {
  if (input.value[0] === "-"){
    input.value = input.value.slice(1, input.value.length);
  }else if(input.value[0] !== "-"){
    input.value = "-" + input.value;
  }

});

//What happens when you click delete.
deL.click(deleTe);

function deleTe() {
  var value = input.value;
  input.value = value.substr(0, value.length - 1);
  newNumber = false;
  if(input.value === "-"){
    input.value = "0";
    newNumber = true;
  }
  if(input.value.length === 0){
    input.value = "0";
    newNumber = true;gvb
  }
}

//What happens when you click CE
cE.click(function() {

  input.value = "0";
  newNumber = true;

});

//What happens when you click clear
clear.click(function() {
  buffer = "0";
  input.value = "0";

  newNumber = true;

});

//Calculate function
function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "x") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "%") {
    return num1 % num2;
  } else if (operator === "sqr") {
    return sQr(num1);
  } else if (operator === "sqrt") {
    return sQrt(num1);
  } else if (operator === "cube") {
    return cuBe(num1);
  } else if (operator === "del") {
    return deL(num1);
  }

}

function sQr(n) {
  return n * n;
}

function sQrt(n) {
  return Math.sqrt(n);
}

function cuBe(n) {
  return n * n * n;
}

// allBtn.keydown(function(e){
//   if
// });














// var symbol;
// var value1, value2;
// var calculator = $(".calculator");
// var display = document.getElementById("viewPort");
// var keys = $(".btn");
// display.value = "0";
// keys.click(function(e){
//   if(e.target.matches(".btn")){
//      var key = e.target;
//      var action = key.dataset.action;
//      var keyContent = key.value;
//      var displayedNum = display.value;
//      // var previousKeyType = calculator.dataset.previousKeyType;
//
//       if(!action){
//         if(displayedNum === "0" || previousKeyType === 'operator'){
//           display.value = keyContent;
//         }else{
//           display.value = displayedNum + keyContent;
//         }
//
//       }
//
//       if(action === "decimal"){
//         if(!display.value.includes(".")){
//           display.value = displayedNum + ".";
//         }
//       }
//
//       if(action === "add" || action === "subtract" || action === "multiply" || action === "divide" || action === "modulo"){
//         value1 = displayedNum;
//         symbol = e.target.value;
//         var previousKeyType = 'operator'
//       }
//
//       if(action === "calculate"){
//
//
//         value2 = displayedNum;
//
//         display.value = calculate(value1, value2, symbol)
//       }
//   }
//
// });
//
// function calculate(num1, num2, operator) {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "x") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   } else if (operator === "%") {
//     return num1 % num2;
//   } else if (operator === "sqr") {
//     return sQr(num1);
//   } else if (operator === "sqrt") {
//     return sQrt(num1);
//   } else if (operator === "cube") {
//     return cuBe(num1);
//   } else if (operator === "del") {
//     return deL(num1);
//   }
//
// }
