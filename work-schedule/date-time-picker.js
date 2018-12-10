var mondayOfWeek;

$( function() {
    $(".date-item__datepicker").datepicker({
       // dateFormat: "dd.mm.yy",
        buttonText: "Pick a date",
        firstDay: 1,
        onSelect: function (date) {
            var d = new Date(date);
            var index = d.getDay();
            if (index == 0) {
                d.setDate(d.getDate() - 6);
            }
            else if (index == 1) {
                d.setDate(d.getDate());
            }
            else if (index != 1 && index > 0) {
                d.setDate(d.getDate() - (index - 1));
            }
            mondayOfWeek = d;
            console.log(mondayOfWeek);
            fillDates(mondayOfWeek);
        }

    });
});


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

function fillDates(monday){
    for (var i=0; i<5; i++){
        var dateItem = document.getElementById("date"+i);
        var date = new Date(monday);
        date = date.addDays(i);
        var month = date.getMonth()+1;
        dateItem.innerHTML = ' '+date.getDate()+'.'+month+'.'+date.getUTCFullYear();
    }
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
