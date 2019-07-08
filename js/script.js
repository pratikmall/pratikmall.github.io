


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

if ( $(window).width() > 768){
     //>=, not <=
    if (scroll >= 600) {
        //clearHeader, not clearheader - caps H
        $(".bleh").addClass("white");
    }
    else{
        $(".bleh").removeClass("white");
    }}
    else {
         //>=, not <=
        if (scroll >= 0) {
            //clearHeader, not clearheader - caps H
            $(".bleh").addClass("white");
        }
        else{
            $(".bleh").removeClass("white");
        }}

});



(function () {
    $(window).scroll(function () {
        var oVal;
        oVal = $(window).scrollTop() / 500;
        return $('.blur-bg').css('opacity', oVal);
    });
}.call(this));

(function () {
    $(window).scroll(function () {
        var oVal;
        oVal = $(window).scrollTop() / 500;
        return $('.blur').css('opacity', oVal);
    });
}.call(this));

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}






$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 0){
      $(".intro").css("opacity", 1 - $(window).scrollTop() / 300);
    }
    else{
      $(".intro").css("opacity", 1 + $(window).scrollTop() / 300);
    }
  });

  $(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});
