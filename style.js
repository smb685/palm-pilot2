//current day and date
var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);
var currentHour = moment().format("H");
var hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// THEN I am presented with timeblocks for standard business hours
for (var i = 0; i < hourArray.length; i++) {
  var div1 = $("<div>");
  div1.attr("class", "row");
  var div2 = $("<div>");

  div2.attr("class", "col");
  div2.attr("id", "time-block");

  //display time

  if (hourArray[i] <= 12) {
    if (hourArray[i] == 12) {
      div2.text(hourArray[i] + " AM");
    } else {
      div2.text(hourArray[i] + "AM");
    }
  } else {
    div2.text(hourArray[i] - 12 + " PM");
  }
  // WHEN I click into a timeblock
  // THEN I can enter an event

  var textarea = $("<textarea>");
  if (hourArray[i] == currentHour) {
    textarea.attr("class", "form-control col-8 present");
  }
  if (hourArray[i] > currentHour) {
    textarea.attr("class", "form-control col-8 past");
  }
  if (hourArray[i] < currentHour) {
    textarea.attr("class", "form-control col-8 future");
  }
  textarea.attr("id", hourArray[i]);
  var div3 = $("<div>");

  // WHEN I click the save button for that timeblock

  div3.attr("class", "col saveBtn text-center fas fa-lock");
  div1.append(div2);
  div1.append(textarea);
  div1.append(div3);
  $(".container").append(div1);
}
//text for that event is saved in local storage

$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#1").val(localStorage.getItem("1"));
$("#2").val(localStorage.getItem("2"));
$("#3").val(localStorage.getItem("3"));
$("#4").val(localStorage.getItem("4"));
$("#5").val(localStorage.getItem("5"));

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var hour = $(this).siblings(".form-control").attr("id");
  var userinput = $(this).siblings(".form-control").val();
  localStorage.setItem(hour, userinput);
});

// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
