const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$$(".btn").forEach((btn) => {
  btn.addEventListener("click", playSound.bind(btn));
});

document.addEventListener("keydown", function (e) {
  const key = document.querySelector(`.key-${e.key}`);
  key && key.click();
});

function playSound() {
  const sound = this.querySelector("audio");
  const clone = sound.cloneNode();
  clone.play();
  clone.volume = 1;
}
