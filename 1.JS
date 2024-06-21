const scrollContainer = document.getElementById('scrollingContent');
const scrollItems = document.querySelectorAll('.scroll-item');
let currentIndex = 0;
const scrollInterval = 5000; // Interval time in milliseconds

function autoScroll() {
    currentIndex = (currentIndex + 1) % scrollItems.length;
    scrollContainer.scroll({
        left: currentIndex * 1064,
        behavior: 'smooth'
    });
}

setInterval(autoScroll, scrollInterval);