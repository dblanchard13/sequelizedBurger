$(document).ready(function (){
    $("body").on("click", "#submit-btn", function (event) {
        var burgerData = {
            name: $("#burger-text").val().trim()
        };
        $.post("/", burgerData).done(function (data) {
            getCall();
        });
    });

    function getCall() {
        $.get("/").done(function (data) {
            var HTML = $.parseHTML(data, document, true);
            var bodyHTML = HTML[15].innerHTML
            console.log(HTML);
            $(".container-fluid").html(bodyHTML);
        });
    }
});