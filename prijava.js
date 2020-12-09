$(function() {


    function funk() {
        alert("jjyhgrfe");
    };

    $("#potvrdi").on("click", function() {
        var string = $("#ime").val();
        var duzina = string.length();
        if (duzina < 6) {
            funk();
        }
    });


});