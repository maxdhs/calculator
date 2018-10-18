// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  });


  // $("form#subtract").submit(function(event) {
  //   event.preventDefault();
  //   var number1 = parseInt($("#subtract1").val());
  //   var number2 = parseInt($("#subtract2").val());
  //   var result = subtract(number1, number2);
  //   $("#output").text(result);
  // });
  //
  // $("form#divide").submit(function(event) {
  //   event.preventDefault();
  //   var number1 = parseInt($("#divide1").val());
  //   var number2 = parseInt($("#divide2").val());
  //   var result = divide(number1, number2);
  //   $("#output").text(result);
  // });
  //
  // $("form#multiply").submit(function(event) {
  //   event.preventDefault();
  //   var number1 = parseInt($("#multiply1").val());
  //   var number2 = parseInt($("#multiply2").val());
  //   var result = multiply(number1, number2);
  //   $("#output").text(result);
  // });
});
