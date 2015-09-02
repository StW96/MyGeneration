var activeSlide;

$(function () {
    activeSlide = 0;
    $(".carousel li:eq(" + activeSlide + ")").css("display","block");
});

function toggleSlide(direction) {
    var newSlide;
    
    if (direction === "back") {
        if (activeSlide <= 0) {
            newSlide = $(".carousel li").length - 1;
        } else {
            newSlide = activeSlide - 1;
        }
    } else if (direction === "forth") {
        if (activeSlide >= $(".carousel li").length - 1) {
            newSlide = 0;
        } else {
            newSlide = activeSlide + 1;
        }
    }
    
    $(".carousel li:eq(" + activeSlide + ")").css("display","none");
    $(".carousel li:eq(" + newSlide + ")").css("display","block")
    
    activeSlide = newSlide;
    $("#secondary").css("height", $("#primary").css("height"));
}