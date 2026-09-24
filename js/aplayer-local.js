document.addEventListener('DOMContentLoaded', function () {
  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini: true,
    autoplay: false,
    theme: '#b7daff',
    audio: [
      {
        name: 'queen st',
        artist: 'Artist',
        url: '/music/thememusic.mp3',
        cover: ''
      }
    ]
  });
});
