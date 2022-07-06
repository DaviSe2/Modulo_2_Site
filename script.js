$(document).ready(function(){

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA,{
        color:'#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: {color:'#AAA'},
        to: {color:'#65DAf9'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB,{
        color:'#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: {color:'#AAA'},
        to: {color:'#65DAf9'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 127);

            circle.setText(value);

        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC,{
        color:'#64DAF9',
        strokeWidth: 8,
        duration: 1800,
        from: {color:'#AAA'},
        to: {color:'#65DAf9'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

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

    }, 250);

   

});