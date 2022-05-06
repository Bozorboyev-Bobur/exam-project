
$(document).ready(function () {
    $('.level__content').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            // {
            //     breakpoint: 1000,
            //     settings: {
            //         arrows: true,
            //         centerMode: true,
            //         centerPadding: '40px',
            //         slidesToShow: 1,
            //         variableWidth: false
            //     }
            // },
            {
                breakpoint:768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint:480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            }
        ]
    });
});