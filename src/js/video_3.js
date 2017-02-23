var videoPlayer = (function() {
    var $livePlayer = document.getElementsByClassName('liveplayer')[0];
    var $video = document.getElementsByTagName('video')[0];
    var $playBtn = document.getElementsByClassName('btn')[0];

    var videoUrl = 'http://godsong.bs2dl.yy.com/djBkNmVlYzQ1NzJhMDU2MzY2MjVlM2FkNjhhZTJlNjlhMTUzNDUyMzY2bWM';

    $playBtn.addEventListener('click', function() {
        showVideo();
        $video.play();
    })

    function showVideo() {
        $livePlayer.style.display = 'block';
        $video.style.display = 'block';
    }

    function hideVideo() {
        $video.style.display = 'none';
        $livePlayer.style.display = 'block';
    }

    $video.addEventListener('play', function() {
       debug('trigger video play status');
    })

    $video.addEventListener('playing', function() {
       debug('trigger video playing status');
    })

    $video.addEventListener('timeupdate', function() {
       // debug('trigger video timeupdate status');

       // debug('video readyState: '+$video.readyState);

       // debug('video networkState: '+$video.networkState);

       // debug('video errorCode: '+$video.errorCode);
    })

    $video.addEventListener('pause', function() {
       debug('trigger video pause status');
    })

    $video.addEventListener('ended', function() {
       debug('trigger video ended status');

       playVideo(videoUrl);

    })

    function debug(con) {
        console.log(con);
        var date = new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var $debug = document.getElementsByClassName('debug')[0];
        var $beforeP = $debug.getElementsByTagName('p')[0];
        console.log($beforeP);
        var $p = document.createElement('p');
        var $textNode = document.createTextNode('['+hour+':'+minutes+':'+seconds+']: '+con);
        $p.appendChild($textNode);

        if($beforeP) {
            $debug.insertBefore($p, $beforeP);
        }else {
            $debug.appendChild($p);
        }
    }

    function playVideo(src) {
        $video.src = src;
        $video.play();
    }


})()