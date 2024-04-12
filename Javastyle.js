const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
let index = 0;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const autoPlay = setInterval(() => {
    next.click();
}, 5000);

prev.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    changeSlide();
});

next.addEventListener('click', () => {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    changeSlide();
});

function changeSlide() {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index? '1' : '0';
    });
}



const homeButton = document.getElementById('homeButton');
const aboutButton = document.getElementById('aboutButton');
const contactButton = document.getElementById('contactButton');
const note = document.getElementById('note');

homeButton.addEventListener('click', () => {
  note.innerHTML = '<p>This is a note about the home page.</p>';
});

aboutButton.addEventListener('click', () => {
  note.innerHTML = '<p>This is a note about the about page.</p>';
});

contactButton.addEventListener('click', () => {
  note.innerHTML = '<p>This is a note about the contact page.</p>';
});