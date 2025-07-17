function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


// Top button
  document.getElementById("top").addEventListener("click",function(e){
    e.preventDefault();
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", function () {
    const topBtn = document.getElementById("top");
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});


// hamburger
   $(document).ready(function(){
        // 預設收合選單
    $('.menu').css({ display: 'none' });
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




