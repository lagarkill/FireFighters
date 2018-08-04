
const news = [
    {   
        "id": 1,
        "tittle": "tittle here",
        "img": "./img/ambiente - copia.jpg",
        "imgDivisor":"./img/accent-2.png",
        "p":"Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi quis earum itaque dolorem voluptas rem distinctio voluptates, odio magni doloribus minus quibusdam! Molestias perferendis molestiae similique, atque quibusdam eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique exercitationem et quis beatae a deleniti cumque velit repellendus ipsam maxime facilis dolorem, quisquam consequatur debitis eum sunt aliquid sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto cum, alias cumque mollitia sunt quas eos sed quis blanditiis! Autem laboriosam impedit modi quo iure laudantium? Voluptates, amet rerum dolorem, culpa voluptatum sed ad corrupti doloremque eos veritatis temporibus."
    },
    {   
        "id": 2,
        "tittle": "tittle here",
        "img": "./img/ambiente - copia.jpg",
        "imgDivisor":"./img/accent-2.png",
        "p":"Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi quis earum itaque dolorem voluptas rem distinctio voluptates, odio magni doloribus minus quibusdam! Molestias perferendis molestiae similique, atque quibusdam eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique exercitationem et quis beatae a deleniti cumque velit repellendus ipsam maxime facilis dolorem, quisquam consequatur debitis eum sunt aliquid sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto cum, alias cumque mollitia sunt quas eos sed quis blanditiis! Autem laboriosam impedit modi quo iure laudantium? Voluptates, amet rerum dolorem, culpa voluptatum sed ad corrupti doloremque eos veritatis temporibus."
    },
    {   
        "id": 3,
        "tittle": "tittle here",
        "img": "./img/ambiente - copia.jpg",
        "imgDivisor":"./img/accent-2.png",
        "p":"Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi quis earum itaque dolorem voluptas rem distinctio voluptates, odio magni doloribus minus quibusdam! Molestias perferendis molestiae similique, atque quibusdam eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique exercitationem et quis beatae a deleniti cumque velit repellendus ipsam maxime facilis dolorem, quisquam consequatur debitis eum sunt aliquid sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto cum, alias cumque mollitia sunt quas eos sed quis blanditiis! Autem laboriosam impedit modi quo iure laudantium? Voluptates, amet rerum dolorem, culpa voluptatum sed ad corrupti doloremque eos veritatis temporibus."
    }
];
/*
const create = (news)=>{
    let htmlTemplate =`
        <section class="new-principal">
            <img class="new-img" src="${news[0].img}" alt="medio ambiente">
            <h2>${news[0].tittle}</h2>
            <p>${news[0].p}</p>
        </section>
        <div class="divisor">
            <img class="divisor-img" src="${news[0].imgDivisor}" alt="divisor">
        </div>
        ` ;
    news.forEach((element)=>{
        if(element.id !== 1){
        htmlTemplate += `
        <section class="new-principal">
            <img class="new-img" src="${element.img}" alt="medio ambiente">
            <h2>${element.tittle}</h2>
            <p>${element.p}</p>
        </section>
        <div class="divisor">
            <img class="divisor-img" src="${element.imgDivisor}" alt="divisor">
        </div>
        `}
    })
    
    document.getElementById('new-principal').innerHTML = htmlTemplate;
}

create(news);*/


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

