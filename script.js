const zoomableContainer = document.querySelector('.zoomable-container');
const zoomableImg = document.querySelector('.zoomable-container__img');

zoomableContainer.addEventListener('mousemove', imgZoom);

function imgZoom(e) {
  const rect = zoomableContainer.getBoundingClientRect(); // Donne des informations sur la taille et la position de l'élément par rapport au viewport

  // Position sur x de la souris dans le container
  const x = e.clientX - rect.left;
  // Position sur y de la souris dans le container
  const y = e.clientY - rect.top;

  // Position sur X en pourcentage
  const positionXInContainer = x / rect.width * 100;
  // Position sur Y en pourcentage
  const positionYInContainer = y / rect.height * 100;

  zoomableImg.style.transformOrigin = `${positionXInContainer}% ${positionYInContainer}%`;
  zoomableImg.style.transform = 'scale(3)';
}

zoomableContainer.addEventListener('mouseleave', mouseLeaveZoomedImg);

function mouseLeaveZoomedImg() {
  zoomableImg.style.transform = 'scale(1)';
}



$(document).ready(function(){
  $('#showhidemca').hover(function() {
      $("div.contentmca").toggleClass('mynewcontentmca');
  });
});