// Declarate variables 

var slider = $('#slider');
var button = $('#asdasd');

// Slider functions

$('#slider div:last').insertBefore('#slider div:first');

slider.css('margin-left','-'+100+'vw');

function moveL(){
    slider.animate({marginLeft:'-'+200+'vw'},700 , function(){
        $('#slider div:first').insertAfter('#slider div:last');
        slider.css('margin-left','-'+100+'vw');
    })
}
function moveR(){
    slider.animate({marginLeft:0},700 , function(){
        $('#slider div:last').insertBefore('#slider div:first');
        slider.css('margin-left','-'+100+'vw');
    })
}
function autoplay (){
    interval = setInterval(function(){
        moveL();
    },4000)
}
autoplay();
button.on('click', function(){
    moveR();
});

