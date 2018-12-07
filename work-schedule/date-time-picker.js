$( function() {
    $( ".date-item__datepicker" ).datepicker({
        dateFormat: "dd.mm.yy",
        buttonText: "Pick a date",
        firstDay: 1,
    });
} );

$ (function() {
    $('.time-item__timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '09',
        maxTime: '9:00pm',
        defaultTime: '11',
        startTime: '10:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
});