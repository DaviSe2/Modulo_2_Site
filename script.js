$(document).ready(function(){

    // Seletor da promoção

    $('.promoSelect').on('click', function(){

        let type = $(this).attr('id');
        let boxes = $('.project-box');
    
        $('.promoSelect').removeClass('active');
        $(this).addClass('active');
    
       });

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA,{
        color:'#FFF',
        strokeWidth: 8,
        duration: 1400,
        from: {color:'#AAA'},
        to: {color:'#852E7C'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5786);

            circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB,{
        color:'#FFF',
        strokeWidth: 8,
        duration: 1600,
        from: {color:'#AAA'},
        to: {color:'#852E7C'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 892);

            circle.setText(value);

        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC,{
        color:'#FFF',
        strokeWidth: 8,
        duration: 1800,
        from: {color:'#AAA'},
        to: {color:'#852E7C'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 157);

            circle.setText(value);

        }

    });

    // Inicia quando o usuário chega no elemento

    let satisfacaoAreaOffset = $('#satisfacao-area').offset();
    let stop = 0;

    $(window).scroll(function(e){

        let scroll = $(window).scrollTop();

        if(scroll > (satisfacaoAreaOffset.top - 500) && stop == 0){
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);

            stop = 1;
        }

    });

    // Parallax
    setTimeout(function(){
        
        $('#satisfacao-area').parallax({imageSrc: 'imagens/parallax.jpg'});
        $('#roteiros-area').parallax({imageSrc: 'imagens/padraoParallax.png'});

    },250);

   // Filtro da Galeria

   $('.filterSelect').on('click', function(){

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.filterSelect').removeClass('active');
    $(this).addClass('active');

    if(type == 'sw-btn'){
        eachBoxes('sw',boxes)
    } else if(type == 'got-btn'){
        eachBoxes('got',boxes)
    } else if(type == 'hp-btn'){
        eachBoxes('hp',boxes)
    }else{
        eachBoxes('all',boxes)
    }

   });

   function eachBoxes(type, boxes){
    if(type == 'all'){
        $(boxes).fadeIn();
    } else {
        $(boxes).each(function(){
            if(!$(this).hasClass(type)){
                $(this).fadeOut('slow');
            }else{
                $(this).fadeIn();
            }
        });
    }

   }

   // scroll para seções

    let navBtn = $('.nav-item');

   let bannerSection = $('#mainSlider');
   let promocaoSection = $('#promocao-area');
   let destinosSection = $('#destinos-area');
   let roteirosSection = $('#roteiros-area');
   let contatoSection = $('#contato-area');

   let scrollTo = '';

   $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    console.log(btnId);

    if(btnId == 'promocao-menu') {
        scrollTo = promocaoSection;
    } else if(btnId == 'destinos-menu') {
        scrollTo = destinosSection;
    } else if(btnId == 'roteiros-menu'){
        scrollTo = roteirosSection;
    } else if(btnId == 'contato-menu') {
        scrollTo = contatoSection;
    } else {
        scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top -70 
    }, 1000);

   });

   let roteirosBtn = $('#roteiros-btn');

   $(roteirosBtn).click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#contato-area').offset().top -70
    }, 1000);
   });

});