/*slider*/
$('.sliders').slick({
  infinite:true,
})
$('.items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay:true,
  autoplayspeed: 5000
});
/*fixmenu*/
function scrolls(){
  let a = document.getElementsByTagName('html')[0].scrollTop;
  console.log(a);
  let h = $('html,body').scrollTop();
  if(a < 30){   
      document.getElementById('header').style.display = "block";
      document.getElementById('navigationbar2').style.position = "absolute";
  }else{
      document.getElementById('header').style.display = "none";
      document.getElementById('navigationbar2').style.position = "fixed";
  }
}
setInterval('scrolls()',500);