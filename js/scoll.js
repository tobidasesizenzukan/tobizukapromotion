$(document).ready(function() {

    $("html,body").stop();

    $("#icon-torikomu").click(function(){
        $("html,body").animate({"scrollTop":$("#card-torikomu").offset().top});
    })

    $("#icon-zukan").click(function(){
        $("html,body").animate({"scrollTop":$("#card-zukan").offset().top});
    })

    $("#icon-hakomiru").click(function(){
        $("html,body").animate({"scrollTop":$("#card-hakomiru").offset().top});
    })

    $("#icon-friends").click(function(){
        $("html,body").animate({"scrollTop":$("#card-friends").offset().top});
    })
})

/*scoll*/
$(window).scroll(function(){

    var cards = document.getElementsByClassName("animate_fade-in");

    for (var i = 0; i < cards.length; i++) {

        //if(up to dwon or down to up)
        if($(window).scrollTop()+$(window).height() > cards[i].offsetTop && $(window).scrollTop() < cards[i].offsetTop+cards[i].offsetHeight){
            cards[i].style.opacity="1";
            cards[i].style.animation="fadeIn 1.5s";
        }else{
            cards[i].style.opacity="0";
            cards[i].style.animation="";
        }
    }
})
