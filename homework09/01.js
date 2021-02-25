// task 01

$("a[href^='https://']").attr('target', '_blank');

// task 02

$("h2.head").css("background", "green")
$("h2.head").find(".inner").css("fontSize", "35px");

// task 03

$("h3").next("div").each(function(i, el) {
    let div = $(el);
    div.insertBefore(div.prev())
})

// task 04

let checkboxes = $("input");
checkboxes.on("change", function() {
    let checked = $('input[type=checkbox]:checked');
    if (checked.length >=3) {
        checkboxes.prop("disabled", true);
    }
})