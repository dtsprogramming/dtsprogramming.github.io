var images = document.querySelectorAll('.scrolling-images img');
var current = 0;

function nextImage() {
  var prev = (current - 1 + images.length) % images.length;
  images[prev].style.transform = "translateX(0%)";
  images[current].style.transform = "translateX(-"+ (current * 100) +"%)";
  current = (current + 1) % images.length;
}

setInterval(nextImage, 3000);
