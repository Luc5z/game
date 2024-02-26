const soundtrack = document.querySelector('#soundtrack');
const volume = document.querySelector('#volume');
let isMuted = true;

function startSoundTrack(){
  soundtrack.play();
  soundtrack.playbackRate = 2.0;
}

function resetSoundTrack(){
  soundtrack.current = 0;
  soundtrack.play();
}

function sound(){
  if(!isMuted){
    isMuted = true
    soundtrack.volume = 0;
    volume.classList.add('muted')
    
  } else {
    isMuted = false;
    soundtrack.volume = 1;
    volume.classList.remove('muted')
  }
}

soundtrack.addEventListener('ended', resetSoundTrack);
window.addEventListener('click', startSoundTrack);
volume.addEventListener('click', sound);


