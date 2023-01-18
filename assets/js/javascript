var images = document.querySelectorAll('.scrolling-images img');
var current = 0;

function nextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

setInterval(nextImage, 3000);
