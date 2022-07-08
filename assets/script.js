// declare global variables
var timeStarts = moment().startOf('day').add(6,'h');
var totalHours = 12;
var currentTime = moment().format('H');

// present, future, and past;
var timeTableElement;
var presentState;


//date and time display
function displayDate() {
    var now = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $('#currentDay').text(now);
}
displayDate();

$(document).ready(function () {
  
function colorCode() {

  
  for (var hour = 0; hour < totalHours; hour++) { 
  
      var currentHour = hour + 7;
      
      timeTableElement = timeStarts.add(1,'h').format('h:mm a');

      // determine present, past & future 
      if (currentTime == currentHour) {
          presentState = 'present';
      } else if (currentTime < currentHour) {
          presentState = 'past';
      } else {
          presentState = 'future';
      }

      let div = 
          `<div id='hour-${currentHour}' class='row time-block ${presentState}'>
              <div class='col-sm-1 hour'>${timeTableElement}</div>
              <textarea class='col-sm-10 description ${currentHour}'></textarea>
              <button class='btn saveBtn col-sm-1'>
                  <i class='fas fa-save'></i>
              </button>
           </div>`;

      $('.container').append(div);

      $(`#hour-${currentHour} .description`).val(localStorage.getItem(`hour-${currentHour}`))
      
  }
}

// onclick event listener 
colorCode();


// save to local storage

$('.saveBtn').on('click', function () {
  var description = $(this).siblings('.description').val()
  
  var time = $(this).parent().attr('id')
  console.log(description, time);

  localStorage.setItem(time, description);
});
})



