var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun.png";
  } else {
    icon.src =
      "https://cdn.iconscout.com/icon/free/png-256/free-night-mode-2-475098.png";
  }
};

// button click sound

const clickSoundUrl = "./click.mp3"; // Adjust this to your sound file location
function playClickSound() {
  const audio = new Audio(clickSoundUrl);
  audio.play();
}
