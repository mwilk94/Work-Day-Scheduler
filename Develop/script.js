
function displayDate() {
    // today display
    var today = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $('#currentDay').text(today);
}

// Function calls
displayDate();



