const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.image-container');
const playPauseButton = document.getElementById("play-pause");
let index = 0;
let autoSlideInterval;
let isPlaying = true;

function showSlide(index) {
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
}

// Previous Slide
function prevSlide() {
    index = (index > 0) ? index - 1 : 1; // Only two images
    showSlide(index);
}

// Next Slide
function nextSlide() {
    index = (index < 1) ? index + 1 : 0; // Only two images
    showSlide(index);
}

// Toggle Play/Pause
function togglePlayPause() {
    if (isPlaying) {
        clearInterval(autoSlideInterval);
        playPauseButton.innerHTML = "▶"; // Show Play Symbol
    } else {
        startAutoSlide();
        playPauseButton.innerHTML = "&#10074;&#10074;"; // Show Pause Symbol
    }
    isPlaying = !isPlaying;
}

// Start Auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

// Start Auto-slide on Page Load
startAutoSlide();



