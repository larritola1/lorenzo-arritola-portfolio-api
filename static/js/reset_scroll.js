// implemented from https://stackoverflow.com/a/31246298
// Reset scroll bar at top, every time the page loads

$(window).on('unload', function() {
    $(window).scrollTop(0);
});