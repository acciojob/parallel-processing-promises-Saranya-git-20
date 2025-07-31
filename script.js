//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

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
function downloadImage(url){
	 return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.blob();
    })
    .then(blob => {
      const img = document.createElement('output');
      img.src = URL.createObjectURL(blob);
      img.alt = url.split('/').pop();
      return img;
    });
}