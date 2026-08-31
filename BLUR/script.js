function playVideo(filename) {
  const videoPlayer = document.getElementById("videoPlayer");
  const videoScreen = document.getElementById("video-screen");
  const homeScreen = document.getElementById("home-screen");

  videoPlayer.src = filename;

  homeScreen.classList.add("hidden");
  videoScreen.classList.remove("hidden");

  // Wait for a moment to ensure the video is loaded before requesting fullscreen
  setTimeout(() => {
    if (videoPlayer.requestFullscreen) {
      videoPlayer.requestFullscreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
      // Safari
      videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
      // IE/Edge
      videoPlayer.msRequestFullscreen();
    }
  }, 100);

  videoPlayer.play();

  videoPlayer.onended = function () {
    // Exit fullscreen after video ends
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
  };
}
