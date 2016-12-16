$(function(){
  console.log("loaded");

  // global variable


  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    if (wScroll > 0) {
      $("#header").css("opacity", "0.9");
    } else {
      $("#header").css("opacity", "1");
    }

  });


});
