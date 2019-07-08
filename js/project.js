$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 250) {
        //clearHeader, not clearheader - caps H
        $(".blah").addClass("white");
    }
    else{
        $(".blah").removeClass("white");
    }
});


$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 0){
      $(".project-head").css("opacity", 1 - $(window).scrollTop() / 200);
    }
    else{
      $(".project-head").css("opacity", 1 + $(window).scrollTop() / 200);
    }
  });
