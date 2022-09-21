// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    playerVars: { // 영상 속성 매개 변수
      autoplay: true, // 자동 재생 여부
      loop: true, // 반복 재생 여부
      playlist: 'An6LvWQuj_8' // 반복 재생 할 플레이 리스트 영상 ID
    },
    events: {
      onReady: (event)=> {
        event.target.mute() //음소거
      }
    }
  });
}