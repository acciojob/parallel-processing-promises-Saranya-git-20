//your JS code here. If required.
// const output = document.getElementById("output");
document.getElementById('downloadBtn').addEventListener('click', downloadImages);

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
Promise.all(image.map(downloadImage))
  .then(() => {
    console.log('All images downloaded successfully.');
  })
  .catch(error => {
    console.error('Error downloading one or more images:', error);
  });
function downloadImages() {
  const loadingDiv = document.getElementById('loading');
  const errorDiv = document.getElementById('error');
  const outputDiv = document.getElementById('output');

  // Clear previous state
  loadingDiv.style.display = 'block';
  errorDiv.textContent = '';
  outputDiv.innerHTML = '';

  // Start downloading images in parallel
  Promise.all(image.map(downloadImage))
    .then(images => {
      images.forEach(img => outputDiv.appendChild(img));
    })
    .catch(error => {
      errorDiv.textContent = error;
    })
    .finally(() => {
      loadingDiv.style.display = 'none';
    });
}
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image: ${url}`);
    img.src = url;
  });
}