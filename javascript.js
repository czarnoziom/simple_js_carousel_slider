const carousel_slide = document.querySelector('.slide');
const carousel_images = document.querySelectorAll('.slide div');

// Buttons
const prev_btn = document.getElementById('prev-btn');
const next_btn = document.getElementById('next-btn');

// Counter
let counter = 1;
const size = carousel_images[0].clientWidth;
console.log(counter);

carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners
prev_btn.addEventListener('click', () => {
    if (counter <= 0) return;
    carousel_slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter);
});

next_btn.addEventListener('click', () => {
    if (counter >= carousel_images.length - 1) return;
    carousel_slide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter);
});

carousel_slide.addEventListener('transitionend', () => {
    if (carousel_images[counter].id === 'last-copy'){
        carousel_slide.style.transition = 'none';
        counter = carousel_images.length -2;
        carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carousel_images[counter].id === 'first-copy'){
        carousel_slide.style.transition = 'none';
        counter = carousel_images.length - counter;
        carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});