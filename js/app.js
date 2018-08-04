// Variables #######################################
const createCards = [
    {
        "id" : 1,
        "img" : "./img/medio ambiente .jpg",
        "p": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi ex officiis explicabo dolores eaque doloribus voluptatemnihil, expedita ad",

    },
    {
        "id" : 2,
        "img" : "./img/fireman2.jpg",
        "p": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi ex officiis explicabo dolores eaque doloribus voluptatemnihil, expedita ad",

    },
    {
        "id" : 3,
        "img" : "./img/medio ambiente .jpg",
        "p": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi ex officiis explicabo dolores eaque doloribus voluptatemnihil, expedita ad",

    }
]
const main = document.getElementById("main");

const newCards = ()=>{
    let htmlTemplates = `
    <section class="cards cards-news" id="${createCards[0].id}">
        <div class="div-img">
            <img class="cards-img" src="${createCards[0].img}" alt="#">
        </div>
        <p class="cards-p">${createCards[0].p}</p>
        <div>
            <div class="cards-button">
                READMORE
            </div>
        </div>
    </section>
    `;
    
    createCards.forEach((element)=>{
        if(element.id !== 1){
            
        htmlTemplates += `
        <section class="cards cards-news" id="${element.id}">
        <div class="div-img">
            <img class="cards-img" src="${element.img}" alt="#">
        </div>
        <p class="cards-p">${element.p}</p>
        <div>
            <div class="cards-button">
                READMORE
            </div>
        </div>
        </section>
        `}
    })
    main.innerHTML = htmlTemplates;
}

newCards();



// Menu ################################

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


// Sticky menu #################################3

$(document).ready(function(){
	var altura = $('#navUl').offset().top;
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('#navUl').addClass('menu-fixed');
		} else {
			$('#navUl').removeClass('menu-fixed');
		}
	});
 
});


