let slide = document.querySelector('.testimonial-message-container');
let slides = slide.children.length;


function Slide() {
    let visibleSlide = parseInt(getComputedStyle(slide).getPropertyValue('--visible-slide'));
    if (visibleSlide < slides - 1) {
        slide.style.setProperty('--visible-slide', ++visibleSlide)
    } else {
        slide.style.setProperty('--visible-slide', 0)
    }
}

let slideId = setInterval(Slide, 2000)