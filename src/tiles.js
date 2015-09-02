jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}

$(window).load(function () { 
    //var width = Math.max(100 / 3, 100 / $("#secondary img").length)
    $("#secondary").css("height", $("#primary").css("height"));

    var length = $("#secondary img").length;
    var rows = 2;
    var height = 100 / rows;
    var width = 100 / (length / rows);
    console.log(rows);
    console.log(height);
    
    $("#secondary > div").css("width", width + "%");
    $("#secondary > div").css("height", height + "%");
    
    $("#imgBox img").bind("click", function() {
        showLightbox(this);
    });
});

function updateHeights() {
    $("#secondary").css("height", $("#primary").css("height"));
}

function showLightbox(element) {
    $("body").append('<div class="lightBoxOverlay" onclick="hideLightBox();"></div>');
    $("body").append('<img src="' + element.src + '" class="lightBoxImage" onclick="hideLightBox()">');
    $(".lightBoxImage").center();
}

function hideLightBox() {
    $(".lightBoxOverlay").remove();
    $(".lightBoxImage").remove();
}



function destroy(element) {
    $(element).remove();
}