// script.js

function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

  
  function replaceMedia(element) {
    const mainDisplay = element.closest('.work-item').querySelector('.main-display');

    if (element.tagName === 'IMG') {
      const newSrc = element.getAttribute('src');
      const newImg = document.createElement('img');
      newImg.src = newSrc;
      newImg.className = 'main-display';
      newImg.alt = 'Main Work';

      mainDisplay.replaceWith(newImg);

    } else if (element.tagName === 'VIDEO') {
      const videoSource = element.querySelector('source').getAttribute('src');
      const newVideo = document.createElement('video');
      newVideo.controls = true;
      newVideo.autoplay = true;      // ✅ Auto-play enabled
      newVideo.muted = true;         // ✅ Muted required for autoplay in most browsers
      newVideo.className = 'main-display';
      newVideo.innerHTML = `<source src="${videoSource}" type="video/mp4">Your browser does not support the video tag.`;

      mainDisplay.replaceWith(newVideo);
    }
  }

