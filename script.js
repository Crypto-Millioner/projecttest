let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let timer;

showSlides();

function showSlides() {

    for (let slide of slides) {
        slide.classList.remove("active");
    }
    
    slides[slideIndex].classList.add("active");
    
    resetTimer();
}

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlides();
    }, 180000); 
}


function showSlide(slideId) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].id === slideId) {
            slideIndex = i;
            showSlides();
            break;
        }
    }
}
