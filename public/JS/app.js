$(document).ready(function () {
    $("body").on("click", "#submit-btn", function (event) {
        var burgerData = {
            name: $("#burger-text").val().trim(),
        };
        $.post("/", burgerData).done(function (data) {
            getCall();
        });
    });

    //Creation of Author
    $(document).on("click", ".devour-btn", function (event) {
        var buttonId = event.target.id;
        var customerData = {
            name: $("#text-" + buttonId).val().trim(),
            burgerId: buttonId
        };
        $.post("/customerData", customerData).done(function (data) {

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