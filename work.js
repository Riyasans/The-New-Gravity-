function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

// Video hover play/pause
const videos = document.querySelectorAll(".videoId");
videos.forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

// Work Page specific
if (window.location.pathname.includes("work")) {

  // Replace media when sub item clicked
  function replaceMedia(element) {
    const workItem = element.closest('.work-item');
    const mainMedia = workItem.querySelector('.main-media');
    mainMedia.innerHTML = "";

    // If clicked element is IMAGE
    if (element.tagName === 'IMG' && !element.classList.contains('main-display')) {
      const newImg = document.createElement('img');
      newImg.src = element.src;
      newImg.className = 'main-display';
      newImg.alt = element.alt;
      mainMedia.appendChild(newImg);
    }

    // If clicked element is VIDEO thumbnail (with data-video attr)
    if (element.dataset.video) {
      loadVimeo(mainMedia, element.dataset.video);
    }
  }

  // Load Vimeo video inside main media
  function loadVimeo(mainMedia, videoUrl = "https://player.vimeo.com/video/1112975926") {
    mainMedia.innerHTML = "";
    const iframe = document.createElement('iframe');
    iframe.src = `${videoUrl}?autoplay=1&muted=0&controls=1&title=0&byline=0&portrait=0`;
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.className = 'main-display';
    iframe.style.width = "100%";
    iframe.style.height = "400px";
    mainMedia.appendChild(iframe);

    // Vimeo Player controls
    const player = new Vimeo.Player(iframe);

    mainMedia.addEventListener("mouseenter", () => {
      player.setVolume(1);
      player.play();
    });

    mainMedia.addEventListener("mouseleave", () => {
      player.pause();
      player.setCurrentTime(0);
    });
  }

  // Initialize default Vimeo on load
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".work-item .main-media").forEach(mainMedia => {
      loadVimeo(mainMedia);
    });
  });
}
