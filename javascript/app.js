$(function(){
  console.log("loaded");


  // calling functiions
  clickNavButton();


  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    //functions
    parallax();
    scrolling();


    function scrolling(){
      if (wScroll > 1) {
        $("#name").css({"opacity" : "0.7"});
        $("#comeOnDown").fadeOut();
        $("#GAPic").fadeIn();
      } else {
        $("#name").css({"opacity" : "1"});
        $("#comeOnDown").fadeIn();
        $("#GAPic").fadeOut();
      }
    }

    function parallax(){
      $("#hugeText").css({
        'transform' : 'translate(0px, '+ wScroll / 25 +'%)'
      });

    }

  });

  function clickNavButton() {
    $("#navButton").click(function(){
      for (var i = 0; i < 4; i++){
        $("#nav" + i).toggleClass("click" + i);
      }
    });
  }

});
