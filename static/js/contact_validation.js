// Implemented from https://stackoverflow.com/a/5276722
// Show custom validation errors for each input section on contact form
$(document).ready(function() {
    var formInputs = document.getElementsByClassName("form-control");
    for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity(e.target.getAttribute("data-error"));
            }
        };
        formInputs[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
});