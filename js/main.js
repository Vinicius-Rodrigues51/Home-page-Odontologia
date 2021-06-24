$(function(){

    // função de menu mobile
    $('#openMenu').click(function(){
        $('#menu').slideToggle();
    })


    // função de slide no menu
    $('nav a').click(function(){
        var href = $(this).attr('href');
        // var offSetTop = $(href).offSet().top;

        $('html','body').animate({
            scrollTop: $(href).offSet().top
        },1500);
    })



    // funçao de slick
    $('.mosaico .mosaico-wraper').slick({
        centerMode: false,
        slidesToShow:6,
        arrows: false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    infinite: true,
                    // centerMode:true,
                    slidesToShow:2,
                    arrows:false,
                    autoplay: true, 
                    autoplaySpeed: 2000,
                }
            }
        ]
    });

    $('.social .mosaico-social').slick({
        centerMode: false,
        slidesToShow:9,
        arrows: false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    // infinite: true,
                    // centerMode:true,
                    slidesToShow:3,
                    arrows:false,
                }
            }
        ]
    });

    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow:3,
        arrows: false,
        infinite: false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    // infinite: true,
                    // centerMode:true,
                    slidesToShow:1,
                    arrows:false,
                    dots:true
                }
            }
        ]
    });


})