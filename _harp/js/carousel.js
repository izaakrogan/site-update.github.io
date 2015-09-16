
;(function () {

    'use strict';

    var firstval = 0;
    parent = document.querySelector('.testimonial');

    function Carousel() {

        if (parent.style.left === '-1100px') {
            parent.style.left = '0px';
            firstval = 0;
        } else {
            firstval += 25;
            parent.style.left = "-" + firstval + "px";
            if (!(firstval % 550)) {
                return;
            }
            setTimeout(Carousel, 20);
        }
    }

    document.querySelector('.icon-right-open-big').addEventListener('click', Carousel);
    document.querySelector('.icon-left-open-big').addEventListener('click', Carousel);

}());

