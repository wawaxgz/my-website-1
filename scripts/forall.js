//hamberger Script
$(document).ready(function(){
  $('#load').fadeOut(10000);
  $('.menu li').click(function(){
      let target = $(this).data('target');
      let moves = $(target).offset().top;
      $('html,body').animate({
          scrollTop : moves
      },800);
  })
  $('#hamburger').click(function(){
      if($('.hamT').css('display') == 'block'){
          $('.hamT').css({display : 'none'});
          $('.menu').css({display : 'block'});
          $('.hamB').css({display : 'block'});
      }else{
          $('.hamT').css({display : 'block'});
          $('.menu').css({display : 'none'});
          $('.hamB').css({display : 'none'});
      }
  })
  $('.menu li').click(function(){
      $('.hamT').css({display : 'block'});
      $('.menu').css({display : 'none'});
      $('.hamB').css({display : 'none'});
  })
})
//Top script
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
      if(h > 800){
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
