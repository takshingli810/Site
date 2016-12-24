$(function(){
  console.log("loaded");


  // calling functiions
  clickNavButton();
  // global variable


  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    if (wScroll > 1) {
      $("#name").css({"opacity" : "0.8"})
    } else {
      $("#name").css({"opacity" : "1"})
    }

  });

  function clickNavButton() {
    $("#navButton").click(function(){
      for (var i = 0; i < 4; i++){
        $("#nav" + i).toggleClass("click" + i)
      }
    })
  }

});
