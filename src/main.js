function init() {
}

function randomColor() {
    var color = "hsl(";
    color += Math.random() * 360 + ", ";
    color += Math.random() * 100 + "%, ";
    color += Math.random() * 100 + "%)";
    
    console.log (color);
}