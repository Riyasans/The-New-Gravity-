// script.js

function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}


const videos   =  document.querySelectorAll(".videoId");
videos.forEach(video => {
  

video.addEventListener("mouseenter", ()  =>{
  video.play();
} );

video.addEventListener("mouseleave", ()  =>{
  video.pause();
  video.currentTime  =  0;
} );
});
  
  function replaceMedia(element) {
  const workItem = element.closest('.work-item');
  const mainMedia = workItem.querySelector('.main-media');
  mainMedia.innerHTML = ""; // clear old

  if (element.tagName === 'IMG') {
    const newImg = document.createElement('img');
    newImg.src = element.src;
    newImg.className = 'main-display';
    newImg.alt = 'Main Work';
    mainMedia.appendChild(newImg);

  } else if (element.tagName === 'VIDEO') {
    const videoSource = element.querySelector('source').getAttribute('src');
    const newVideo = document.createElement('video');
    newVideo.controls = true;
    newVideo.muted = true;     // autoplay ke liye mute required
    newVideo.className = 'main-display';
    newVideo.innerHTML = `<source src="${videoSource}" type="video/mp4">Your browser does not support the video tag.`;

    // hover par play/pause
    newVideo.addEventListener('mouseleave', () => newVideo.pause());

    mainMedia.appendChild(newVideo);

  } else if (element.classList.contains('vimeo-thumb')) {
    const vimeoSrc = element.getAttribute('data-vimeo');
    const iframe = document.createElement('iframe');
    iframe.src = vimeoSrc;
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.className = 'main-display';
    iframe.style.width = "100%";
    iframe.style.height = "400px";
    mainMedia.appendChild(iframe);

    const player = new Vimeo.Player(iframe);

    mainMedia.addEventListener('mouseenter', () => {
      player.play();
    });
  }
}



  

