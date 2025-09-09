
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
  


  if (window.location.pathname.includes("work")) {
    function replaceMedia(element) {
      const workItem = element.closest('.work-item');
      const mainMedia = workItem.querySelector('.main-media');
      mainMedia.innerHTML = ""; 

      if (element.tagName === 'IMG' && !element.classList.contains('main-display')) {
        const newImg = document.createElement('img');
        newImg.src = element.src;
        newImg.className = 'main-display';
        newImg.alt = element.alt;
        newImg.addEventListener('click', () => {
          loadVimeo(mainMedia);
        });

        mainMedia.appendChild(newImg);
      }
    }
if (window.location.pathname.includes("work")) {
    function replaceMedia(element) {
      const workItem = element.closest('.work-item');
      const mainMedia = workItem.querySelector('.main-media');
      mainMedia.innerHTML = ""; 

      if (element.tagName === 'IMG' && !element.classList.contains('main-display')) {

        const newImg = document.createElement('img');
        newImg.src = element.src;
        newImg.className = 'main-display';
        newImg.alt = element.alt;

       
        newImg.addEventListener('click', () => {
          loadVimeo(mainMedia);
        });

        mainMedia.appendChild(newImg);
      }
    }

    function loadVimeo(mainMedia) {
      mainMedia.innerHTML = "";
      const iframe = document.createElement('iframe');
      iframe.src = "https://player.vimeo.com/video/1112975926?autoplay=0&muted=1&controls=0&title=0&byline=0&portrait=0"; 
      iframe.frameBorder = "0";
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.allowFullscreen = false;
      iframe.className = 'main-display';
      iframe.style.width = "100%";
      iframe.style.height = "400px";
      mainMedia.appendChild(iframe);

      const player = new Vimeo.Player(iframe);

      
      mainMedia.addEventListener("mouseenter", () => {
  
  player.setVolume(1);  // sound on
  player.play();
});
     mainMedia.addEventListener("mouseleave", () => {
        player.pause();
        player.setCurrentTime(0); 
      });
    }

    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".work-item .main-media").forEach(mainMedia => {
        loadVimeo(mainMedia);
      });
    });
  }



}

