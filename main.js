let empty = []
window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;//點擊後將音訊退回開頭
  audio.play();
  key.classList.add('playing');
  empty.push(e.keyCode)
})

function removeTransition(e) {
  if (e.propertyName != 'transform') return;
  this.classList.remove('playing');
}
function playTheMusic(arr) {
  arr.forEach(music => {
    const musics = document.querySelector(`audio[data-key="${music}"]`);
    musics.currentTime = 0;
    musics.play();
    setTimeout('console.log("test123");', 3000);
  })
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const play = document.querySelector('.play')
play.addEventListener('click', function () {
  playTheMusic(empty);
});