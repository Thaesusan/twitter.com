//sticky
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 800){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');

        }
    })
})
 //arrow up  
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >1000){
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });

    $('#topBtn').click(function(){
        $('html, body').animate({scrollTop: 0},1000);
    })
    

})

//loader

$(window).on("load", function(){
    $(".loader-container").fadeOut(1000);
})