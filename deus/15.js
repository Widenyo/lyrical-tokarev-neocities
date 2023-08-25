const trackIds = ['vYp1sAYyWwoD3FGO4gNU91D0xSlMuxkj', '7RSxZ3w7CAWsAvQNEwFeMG6VJQFPuvIZ', 'SLcLR4tePvfPPC6drDK4Be33RaBDm1GD', 'SQANPnRv1nYkwRrbFvoOxCd2SHqpPa1s', 'Q85BptFWeM4FtSrRPXYUUNOaPHVqfJIf', 'M8xawvxxFFZyAnvL3g5so9Mojk17Kufs', 'n0ynCuEv4T8hVNHdhtrBgQAGITYCALOd', 'KE0fMMvVPIoBnmpsixdriCbVComDor1y', 'wXl4HGnGyCDnXKq1nF3VeWpw1DmQbDwr', 'elmwig21dwP7LnpBuUUNX7y7wqrnviYz', 'jzrFFyAKinIdbDyhnL7rQAwYuCArhwBf', 'hiiU8SZQbkgR5gU5RpNXleJ11AeoBIM1', 'k0Kz31SSPXYdZU8VXZtvfrGvA7ZLFuve', 'Pk5xtxbKVnPZX01UrznpgaARt2tW0lbq', 'Xxd77h92rms0AS8xihFm14Jlm8UMf2NK', '8EaEeMt1yUuDyGhc2Jj0gKo2Yu59lzMY', 'NHQcz6BsUiri40PjtCG4CXsUwla5aZ5Z', 'J7ink7QvmKrVcFcw3zjpEJ5uZbX56let', 'PEgtcvoKLhKNZHAWZwkVT7Jq9cwBSljb', 'JXmASv8ELu46RkOtZ8bpfjdP7dtumxQ7', 'aFBiKZ12vxDF6bfTmFyP9kk7tcU1627G', 'jrlbAwxQYConMkx8SoQ1mVQoCZs4A68A', 'MNeehw5AiE0qRm306kIfiePEWaIE13aQ', 'G1GAfLx23GeLdLxf7EwQeaIQzXrukgA7', 'Z3n0iwfGaGgA5K2nfm8zCsxDOdfr5Pnf', 'ZX8WjTexojqrusji6Oc89mObC7ZuSjeg', 'Kp3B6JxK8Fa09gEBN929KJ8wDYIT0ftQ', 'UatFyXqISCd14SyeeAZMnqcwTIoNJtQ9', 'TWcMZ1QSZAlyc8oECwRsl8vM5uf61JAp']
const audioPrefix = 'https://audio.jukehost.co.uk/';
const SAYA = document.getElementById("SAYA")

let currentAudio = new Audio();
currentAudio.volume = 0.2;
let isFirstClick = true;
let clickStartTime = 0;

let isSliderHeld = false;
let lastSliderReleaseTime = 0;
let sliderHoldInterval = null;
let sliderAutoMaxChance = 0.1; // 10% de probabilidad
let sliderAutoMaxInterval = 500; // 0.5 segundos

const unicodeRanges = [
    { start: 0x0020, end: 0x007F },   // Basic Latin
    { start: 0x00A0, end: 0x00FF },   // Latin-1 Supplement
    { start: 0x0900, end: 0x097F },
    { start: 0x0980, end: 0x09FF },
    { start: 0x20A0, end: 0x20CF },
    { start: 0x2190, end: 0x21FF },
    { start: 0x2500, end: 0x25FF },
    { start: 0x25A0, end: 0x25FF },
    { start: 0x3040, end: 0x309F },
    { start: 0x30A0, end: 0x30FF },
    { start: 0x2500, end: 0x00FF },
    // Agrega más rangos Unicode aquí
  ];

  function getRandomUnicode(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomRange = unicodeRanges[Math.floor(Math.random() * unicodeRanges.length)];
      const randomCharCode = Math.floor(Math.random() * (randomRange.end - randomRange.start + 1)) + randomRange.start;
      result += String.fromCharCode(randomCharCode);
    }
    return result;
  }


function playRandomSong() {
  // Detener la canción actual si está reproduciéndose
  if (!currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Elegir un ID de canción aleatorio
  const randomTrackId = trackIds[Math.floor(Math.random() * trackIds.length)];

  // Configurar la fuente del audio con el ID aleatorio
  currentAudio.src = audioPrefix + randomTrackId;

  // Reproducir la canción
  currentAudio.play();
}

document.addEventListener('click', () => {
  if (isFirstClick) {
    playRandomSong();
    isFirstClick = false;
  }
});

SAYA.addEventListener("click", () => {
    playRandomSong();
})

document.addEventListener('mousedown', () => {
  clickStartTime = new Date().getTime();
});

currentAudio.addEventListener('ended', playRandomSong);

// Agregar opciones al dropdown según las posiciones en el array
const dropdown = document.querySelector('select');
trackIds.forEach((trackId, index) => {
    const option = document.createElement('option');
    const randomLength = Math.floor(Math.random() * (53 - 7 + 1)) + 7;
    const randomUnicode = getRandomUnicode(randomLength);
    option.textContent = randomUnicode;
    dropdown.appendChild(option);
  });


  function generateRandomUnicodeString() {
    const minLength = 7;
    const maxLength = 53;
    const stringLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let result = '';
    const characters = '\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF';
    const charArray = characters.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g);
    for (let i = 0; i < stringLength; i++) {
      const randomIndex = Math.floor(Math.random() * charArray.length);
      result += charArray[randomIndex];
    }
    return result;
  }

// Cambiar la canción al seleccionar una opción del dropdown
dropdown.addEventListener('change', (event) => {
    const selectedIndex = Array.from(dropdown.options).indexOf(event.target.selectedOptions[0]);
    if (selectedIndex >= 0 && selectedIndex < trackIds.length) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.src = audioPrefix + trackIds[selectedIndex];
      currentAudio.play();
    }
  });

function generateRandomUnicode() {
    const randomCodePoint = Math.floor(Math.random() * (0x1F4AF - 0x1F300 + 1)) + 0x1F300;
    return String.fromCodePoint(randomCodePoint);
  }


  document.getElementById('slider').addEventListener('input', (event) => {
    if (isSliderHeld) {
      clearInterval(sliderHoldInterval);
    }
    isSliderHeld = true;
    sliderHoldInterval = setInterval(() => {
      if (isSliderHeld && Math.random() < sliderAutoMaxChance) {
        event.target.value = event.target.max;
        currentAudio.volume = 1;
      }
    }, sliderAutoMaxInterval);
  
    const newVolume = parseFloat(event.target.value);
    currentAudio.volume = newVolume/100;
  });

  const slider = document.getElementById("slider")

  slider.addEventListener('input', (event) => {
    const currentTime = new Date().getTime();
    if (isSliderHeld && (currentTime - lastSliderReleaseTime) >= sliderAutoMaxInterval) {
      clearInterval(sliderHoldInterval);
    }
  
    isSliderHeld = true;
    sliderHoldInterval = setInterval(() => {
      if (isSliderHeld && Math.random() < sliderAutoMaxChance) {
        event.target.value = event.target.max;
        currentAudio.volume = 1;
      } else if (!isSliderHeld) {
        clearInterval(sliderHoldInterval);
      }
    }, sliderAutoMaxInterval);
  
    const newVolume = parseFloat(event.target.value);
    currentAudio.volume = newVolume/100;
  });

  slider.addEventListener('mousedown', () => {
    clickStartTime = new Date().getTime();
  });
  
  slider.addEventListener('mouseup', () => {
    isSliderHeld = false;
    lastSliderReleaseTime = new Date().getTime();
    clearInterval(sliderHoldInterval);
  });