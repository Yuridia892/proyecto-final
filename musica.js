// Change the album cover and song title
const albumCover = document.querySelector('.album-cover img');
const songTitle = document.querySelector('.song-info h2');
albumCover.src = 'new-album-cover.jpg';
songTitle.textContent = 'New Artist - New Song Title';

// Play or pause the audio
const audio = document.querySelector('audio');
const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause';
  } else {
    audio.pause();
    playButton.textContent = 'Play';
  }
});

// Change the volume
const volumeSlider = document.querySelector('.volume-slider');
volumeSlider.addEventListener('input', function() {
  audio.volume = this.value / 100;
});

// Change the playback speed
const speedSlider = document.querySelector('.speed-slider');
speedSlider.addEventListener('input', function() {
  audio.playbackRate = this.value / 100;
});
