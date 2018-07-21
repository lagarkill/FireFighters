$('.submenu').hover(function(){
    $(this).children("ul").slideDown();
}, function(){
    $(this).children("ul").slideUp();
})

$('ul').mouseover(function(p){
    p.stopPropagation();
})
/*
$('#nav-label').click(function(){
    $('.nav').slideToggle();
})
$('.nav').click(function(p){
    p.stopPropagation();
})*/
/*$('#nav-button').click(function(){
    $('.nav').toggleClass('visible-nav');
})*/

