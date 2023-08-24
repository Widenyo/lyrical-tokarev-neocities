const cont = document.getElementById("container")

const m = 0x12000;
const mx = 0x123FF;  




setInterval(() => {
    const randomCharCode = Math.floor(Math.random() * (mx - m + 1)) + m;
    const r = String.fromCodePoint(randomCharCode);
    cont.innerHTML += r
    cont.scrollTop = cont.scrollHeight
}, 20)