// Product Slider

const productSliders = document.querySelectorAll('.product-slider');

productSliders.forEach(slider => {
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }, 5000); // Rotate every 5 seconds
});