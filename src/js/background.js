document.addEventListener('DOMContentLoaded', function() {
  const images = [
    "assets/img/Image1.jpg",
    "assets/img/Image2.jpg",
    "assets/img/Image3.jpg",
    // Add more images as needed
  ];

  // Function to select a random image
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  // Function to set the background image of the container
  function setBackgroundImage() {
    const imageContainer = document.querySelector('.image-container');
    if (imageContainer) {
      imageContainer.style.backgroundImage = `url('${getRandomImage()}')`;
    }
  }

  // Initial background image set
  setBackgroundImage();

  // Change the background image every 5 seconds
  setInterval(setBackgroundImage, 5000); // Adjust the interval as needed (5000ms = 5 seconds)
});
