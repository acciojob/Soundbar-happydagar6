const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let audio = document.createElement("audio");
document.body.appendChild(audio);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const sound = button.getAttribute("data-sound");

    audio.pause();
    audio.currentTime = 0;

    audio.src = `sounds/${sound}.mp3`;
    audio.play();
  });
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});
