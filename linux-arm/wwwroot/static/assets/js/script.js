
$(document).ready(function () {
    
    $(".dataTables_length select").addClass("form-control");
    $(".dataTables_filter input").addClass("form-control");
});

if (0 < $(".date-picker").length) {
    $(".date-picker").pickadate({
        format: "dd/mm/yyyy",
        showMonthsShort: true,
        showWeekdaysFull: false,
        editable: false,
        selectYears: true,
        selectMonths: true,
        closeOnSelect: true,
        closeOnClear: true,
    });
}

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};