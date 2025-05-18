let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let slideInterval;

function showSlide(slideId) {

    let newIndex = 0;
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (slide.id === slideId) {
            newIndex = index;
        }
    });
    
    currentSlide = newIndex;
    slides[currentSlide].classList.add('active');
    resetTimer();
}

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    resetTimer();
}

function resetTimer() {
    clearInterval(slideInterval);

    document.querySelectorAll('.timer-bar').forEach(bar => {
        bar.style.animation = 'none';
        void bar.offsetWidth;
        bar.style.animation = 'timer 180s linear forwards';
    });
    slideInterval = setInterval(nextSlide, 180000); }

document.addEventListener('DOMContentLoaded', () => {

    slides[0].classList.add('active');

    resetTimer();
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            resetTimer();
        }
    });
});