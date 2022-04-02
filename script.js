    var player;
    var frame = document.querySelector('#video-frame');
    var cookieConsent = document.querySelector('#accept');
    var firstScriptTag = document.querySelector('script');
    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    frame.setAttribute('height', Math.floor(frame.clientWidth * .6));

    cookieConsent.addEventListener('click', () => {
        player.seekTo(0);
        player.unMute();    
    });

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-frame');
    }

    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


 function hide() {
    setTimeout(function (){  // delay for video to start
        const overlay= document.getElementById('permission');
        overlay.style.display = 'none';
     }, 500);
}


