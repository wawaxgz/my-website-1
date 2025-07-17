$(document).ready(function(){
    $('li').click(function(){
        let datas = $(this).data('target');
        let moves = $(datas).offset().top;
        $("html,body").animate({
            scrollTop: moves
        },1000)
        console.log(moves);
    })
    $('#top').hide();
    $(window).scroll(function(){
        let h = $('html,body').scrollTop();
        console.log(h);
        if(h > 100){
            $('#top').fadeIn(300);
        }else{
            $('#top').fadeOut(300);
        }
    })
    $('#top').click(function(){
        $('html,body').animate({
            scrollTop: 0
        })
    })
});
// ham
$('#habg').on('click',function(){
    $('#menu').stop().slideToggle();
    if($('.hamT').css('display') == 'block'){
        $('.hamT').hide();
        $('.hamB').hide();
        $('.hamC:nth-of-type(2)').css({transform: 'rotate(45deg)'});
        $('.hamC:nth-of-type(3)').css({transform: 'rotate(135deg)'});
    }else{
        $('.hamT').show();
        $('.hamB').show();
        $('.hamC:nth-of-type(2)').css({transform: 'rotate(0deg)'});
        $('.hamC:nth-of-type(3)').css({transform: 'rotate(0deg)'});
    }
})