// implemented from https://newbedev.com/pausing-bootstrap-carousel-when-a-video-playing

// Pause currently playing video when carousel slides to next video
$(document).ready(function(){
    $('#pagesCarousel').on('slide.bs.carousel', function(event) {
        players[event.from].pauseVideo();
    });
});

// Load IFrame Player and create iframe for selected video
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var players = [];

// Pause carousel from sliding while video is currently playing
function onYouTubeIframeAPIReady(){
    var allMovieIframes = document.getElementById("pagesCarousel").getElementsByTagName('iframe');
    for (currentIFrame of allMovieIframes)
    {
        players.push(new YT.Player(
            currentIFrame.id,
            { events: { 'onStateChange': onPlayerStateChange } }
        ));
    }
}

function onPlayerStateChange(event){
    if (event.data == YT.PlayerState.PLAYING || event.data == YT.PlayerState.BUFFERING)
    {
        $('#pagesCarousel').carousel('pause');
    }
    else
    {
        $('#pagesCarousel').carousel();
    }
}