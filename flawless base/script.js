document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll("video");

    videos.forEach(function(video) {
        video.addEventListener("click", function() {
            if (video.muted) {
                video.muted = false;
            } else {
                video.muted = true;
            }
        });
    });
});