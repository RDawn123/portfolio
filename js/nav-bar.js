$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-bar-outer-container");
        $nav.toggleClass('scrolling-nav', $(this).scrollTop() > $nav.height());
    });

    $(".nav-option > a , .about-me-anchor").on('click', function () {
        let section = $(this).attr('data-section');
        $('html, body').animate({
            scrollTop: $(`#${section}`).offset().top - 25
        }, 1000);
    });
});