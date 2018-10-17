// Business (or back-end) logic:


var appointment = function(Name, Description, Date, Time) {
    return Name + Description + Date + Time;
  };

var beverage = $("#beverage").val();

  
//   var description = function(number1, number2) {
//     return number1 - number2;
//   };
  
//   var time = function(number1, number2) {
//     return number1 * number2;
//   };
  
//   var date = function(number1, number2) {
//     return number1 / number2;
//   };
  
  // Everything below this line is user interface (or front-end) logic:
  
  $(document).ready(function() {
    $("form#name").submit(function(event) {
     event.preventDefault();
      var number1 = parseInt($("#name1").val());
      var number2 = parseInt($("#name2").val());
      var result = appointment(number1, number2);
      $("#output").text(result);
      
    });
  
    // $("form#description").submit(function(event) {
    //   event.preventDefault();
    //   var number1 = parseInt($("#description1").val());
    //   var number2 = parseInt($("#description2").val());
    //   var result = description(number1, number2);
    //   $("#output").text(result);
    // });
  
    // $("form#date").submit(function(event) {
    //   event.preventDefault();
    //   var number1 = parseInt($("#date1").val());
    //   var number2 = parseInt($("#date2").val());
    //   var result = date(number1, number2);
    //   $("#output").text(result);
    // });
  
    // $("form#time").submit(function(event) {
    //   event.preventDefault();
    //   var number1 = parseInt($("#time1").val());
    //   var number2 = parseInt($("#time2").val());
    //   var result = time(number1, number2);
    //   $("#output").text(result);
    });
  
  