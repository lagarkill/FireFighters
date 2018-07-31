$('.submenu').hover(function(){
    $(this).children("ul").slideDown();
}, function(){
    $(this).children("ul").slideUp();
})

$('.submenu').click(function(){
    $(this).children("ul").slideToggle()
})

$('ul').click(function(p){
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

