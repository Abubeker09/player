document.getElementById("optionsBtn").addEventListener("click", function() {
  let optionsDropdown = document.getElementById("optionsDropdown");
  if (optionsDropdown.style.display === "none") {
    optionsDropdown.style.display = "block"; // Show the options when the button is clicked
  } else {
    optionsDropdown.style.display = "none";
  }
});

document.getElementById("speedOptions").addEventListener("change", function() {
  let optionsDropdown = document.getElementById("optionsDropdown");
  let speedOptions = document.getElementById("speedOptions");
  let selectedSpeed = speedOptions.value;
  let audio = document.getElementById("myAudio");
  audio.playbackRate = selectedSpeed; // Change the playback speed when the user selects an option
  optionsDropdown.style.display = "none"; // Hide the options after the user selects a speed
});


const audio = document.getElementById('myAudio');
const playButton = document.querySelector('.puse');
const volumeSlider = document.getElementById('rg');
const progressBar = document.getElementById('range');
const currentTimeDisplay = document.querySelector('h4');
const speedControl = document.getElementById('speed');

// Play/pause button functionality
playButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    this.textContent = '❚❚'; // Change the button text to pause symbol
  } else {
    audio.pause();
    this.textContent = '▶'; // Change the button text to play symbol
  }
});

// Update the volume when the volume slider changes
volumeSlider.addEventListener('input', function() {
  audio.volume = this.value / 100; // Set the volume based on the slider value (0-100)
});

// Update the progress bar and time display when the audio is playing
audio.addEventListener('timeupdate', function() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  currentTimeDisplay.textContent = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration);
});

// Update the audio playback position when the progress bar is interacted with
progressBar.addEventListener('input', function() {
  const seekTime = (audio.duration * (this.value / 100));
  audio.currentTime = seekTime;
});

// Change the playback speed when the speed control changes
speedControl.addEventListener('input', function() {
  audio.playbackRate = this.value; // Set the playback speed based on the control value
});

// Function to format time in MM:SS format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
