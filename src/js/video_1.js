var videoPlayer = (function() {
    var $video = document.getElementsByTagName('video')[0];
    var $playBtn = document.getElementsByClassName('btn')[0];


    $playBtn.addEventListener('click', function() {
        $video.play();
    })


})()