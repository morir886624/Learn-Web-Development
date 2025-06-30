  
const boxes = document.querySelectorAll('.box');

function revealOnScroll() {
  boxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // pour afficher les boîtes déjà visibles



