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

// image change
document.getElementById("icon").addEventListener("click", function () {
  var currentImage = document.getElementById("icon").src;
  var currentText = document.getElementById("icon").innerHTML;

  if (
    currentImage.endsWith(
      "https://cdn.iconscout.com/icon/free/png-256/free-night-mode-2-475098.png"
    )
  ) {
    document.getElementById("icon").src = "sun.png";
    document.getElementById("icon").innerHTML = "Dark Mode";
  } else {
    document.getElementById("icon").src =
      "https://cdn.iconscout.com/icon/free/png-256/free-night-mode-2-475098.png";
    document.getElementById("icon").innerHTML = "Light Mode";
  }
});

// button click sound

const clickSoundUrl = "./click.mp3"; // Adjust this to your sound file location
function playClickSound() {
  const audio = new Audio(clickSoundUrl);
  audio.play();
}

//Open resume
document.getElementById("openPDFBtn").addEventListener("click", function () {
  const filePath = "./Samrat_Mali.pdf";
  window.open(filePath);
});

//Popup box
function showPopup() {
  var popupBox = document.createElement("div");
  popupBox.id = "popupBox";

  var closeBtn = document.createElement("span");
  closeBtn.id = "closeBtn";
  closeBtn.innerHTML = "&times;";
  closeBtn.onclick = function () {
    document.body.removeChild(popupBox);
  };
  popupBox.appendChild(closeBtn);

  var popupContent = document.createElement("div");
  popupContent.innerHTML =
    "<h2>Some latest News</h2><p>I’m excited to share that I recently developed  my new Project using MERN Stack which is Called as bolbuddy Check it now for more detail's</p>";
  popupBox.appendChild(popupContent);

  var checkNowButton = document.createElement("a");
  checkNowButton.id = "checkbtn";

  checkNowButton.href = "#project";
  checkNowButton.textContent = "Check   Now";
  popupBox.appendChild(checkNowButton);

  document.body.appendChild(popupBox);
}

window.onload = showPopup;
