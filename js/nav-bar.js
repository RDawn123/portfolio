$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-bar-outer-container");
        $nav.toggleClass('scrolling-nav', $(this).scrollTop() > $nav.height());
    });
});