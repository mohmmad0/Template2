$(function () {
    "use strict";
    //Trigger Nice Scroll Plogin
    $("html").niceScroll({
        cursorcolor: "rgb(68,201,237)",
        cursorwidth: "10",
        cursorborder: "1px solid rgb(68,201,237)"

    })

    //Change Header Height 
    $(".header").height($(window).height());
    //Scroll To Features
    $(".header .arrow i").click(function () {
        $("html,body").animate({
            scrollTop: $(".features").offset().top
        }, 1000)
    });
    //Scroll To Our Team
    $(".hire").click(function () {
        $("html,body").animate({
            scrollTop: $(".our-team").offset().top
        }, 1000)
    });
    //Scroll To Our Works
    $(".works").click(function () {
        $("html,body").animate({
            scrollTop: $(".our-work").offset().top
        }, 1000)
    });
    //Show Hidden Items
    $(".show-more").click(function () {
        $(".our-work .hidden").fadeIn(2000);
        $(this).fadeOut(2000);
    });
    //Check Testimonials
    var leftArrow = $(".test .fa-chevron-left"),
        rightArrow = $(".test .fa-chevron-right");
    function checkClients() {
        if ($(".client:first").hasClass("active")) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        if ($(".client:last").hasClass("active")) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
    }
    checkClients();
    $(".test i").click(function () {
        if ($(this).hasClass("fa-chevron-right")) {
            $(".test .active").fadeOut(100, function () {
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                checkClients();
            });
        } else {
            $(".test .active").fadeOut(100, function () {
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                checkClients();
            });
        }
    });
});



