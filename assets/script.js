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

    $(function() {
  
  function updateCurrentTime() {
    var currentTime = dayjs().format("h:mm A");
    $("#currentTime").text("Current Time: " + currentTime);
  }

  // Display the current date and time in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
  setInterval(updateCurrentTime, 1000);

});

    $(function() {
      // Function to reset the calendar to the next day
      function resetCalendar() {
        var currentHour = dayjs().hour();
        if (currentHour >= 17) {
          var nextDay = dayjs().add(1, 'day');
          $("#currentDay").text(nextDay.format("dddd, MMMM D, YYYY"));
          $(".description").val("");
          $(".time-block").removeClass("past present future");
          $(".time-block").addClass("future");
        }
      }
      $(".saveBtn").on("click", function() {
        var key = $(this).closest(".time-block").attr("id");
        var userInput = $(this).siblings(".description").val();
        localStorage.setItem(key, userInput);
      });
      $(".time-block").each(function() {
        var currentHour = dayjs().hour();
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
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
    
      // Reset the calendar to the next day after 5 PM
      resetCalendar();
    });

    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
  });
  