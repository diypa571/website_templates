(function ($) {
    "use strict";

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


})(jQuery);
