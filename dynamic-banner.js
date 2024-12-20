// Script pour la bannière dynamique
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const controls = document.querySelectorAll('.control');

function changeSlide(index) {
    slides[currentSlide].classList.remove('active');
    controls[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    controls[currentSlide].classList.add('active');
}

function autoSlide() {
    let nextSlide = (currentSlide + 1) % slides.length;
    changeSlide(nextSlide);
}

setInterval(autoSlide, 5000); // Change every 5 seconds
