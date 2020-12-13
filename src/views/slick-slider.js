import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'
require('slick-carousel');


$('.section-slider__response').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: true,
        
        // variableWidth: true
});
