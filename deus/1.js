

let images = [];

fetch('https://resources.lyricaltokarev.com/cloudinary/avatar')
.then((response) => images = response.json()).then((data) =>{images = data.data.files})

const imgElement = document.getElementById('ai');

    setInterval(() => {
      imgElement.src = images[Math.floor(Math.random()*images.length)].url;
      }, 2333);