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
  
 



  

