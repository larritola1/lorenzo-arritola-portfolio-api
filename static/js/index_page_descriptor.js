// Change page link descriptor with on-screen respective image

$(document).ready(function(){
    var pages = $('.page');
    var count = 0;

    $('#indexCarousel').on('slide.bs.carousel', function(e) {
        current = $('.page.active');
        if ('right' != e.direction) {
            if (count >= 0 && count < 3) {
                current.removeClass('active');
                pages.eq(count+1).addClass('active');
                count++;
            }
            else {
                count = 0;
                current.removeClass('active');
                pages.eq(count).addClass('active');
            }
        }
        else {
            if (count >= 0 && count < 3) {
                current.removeClass('active');
                pages.eq(count-1).addClass('active');
                count--;
            }
            else {
                count = 2;
                current.removeClass('active');
                pages.eq(count).addClass('active');
            }
        }

        // Invert navbar colors when "photography" image is on screen
        if (count == 3 || count == -1) {
            $('nav').attr('class','navbar navbar-expand-lg bg-transparent navbar-dark');
        }
        else {
            $('nav').attr('class','navbar navbar-expand-lg bg-transparent navbar-light');
        }
    });
});