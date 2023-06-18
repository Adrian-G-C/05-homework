$(function() {
  $(".saveBtn").on("click", function() {
    var key = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(key, userInput);
  });

  $(".time-block").each(function() {
    var currentHour = dayjs().format("H");
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $(".time-block").each(function() {
    var key = $(this).attr("id");
    var userInput = localStorage.getItem(key);

    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  });

  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});

$(function() {
  // Function to update the current time
  function updateCurrentTime() {
    var currentTime = dayjs().format("h:mm A");
    $("#currentTime").text("Current Time: " + currentTime);
  }
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
  setInterval(updateCurrentTime, 1000);
});
