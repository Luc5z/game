const soundtrack = document.querySelector('#soundtrack');

function startSoundTrack(){
  soundtrack.play();
  soundtrack.playbackRate = 2.0;
}

function resetSoundTrack(){
  soundtrack.current = 0;
  soundtrack.play();
}

soundtrack.addEventListener('ended', resetMusic);
window.addEventListener('mousemove', startSoundTrack);


