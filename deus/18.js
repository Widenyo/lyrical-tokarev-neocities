const MAX = 750
let timer = Math.random() * MAX
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const quotes = [
    "for whosoever exalteth himself,shall be brought low, <br>and he that humbleth himself, shall be exalted.",
    " But seek ye first the kingdom of God, and his righteousness,and all these things shall be ministered unto you.",
    "the resurrection and the life <br>he that believeth in me,though he were dead yet shall he live.",
    "I am the blade that cuts down evil, I am the blade that cuts down evil,",
    "return the deformities that stain this sky with despair to nothingness",
    "don't look away You will be tried",
    "winter sunset, flaming beyond spires, and chimneys half-detached from this dull sphere,Opens great gates to some forgotten year Of elder splendours and divine desires.",
    "—but ancient lore repeats<br> that human tread has never soiled these streets.",
    "It will be power, and become glorious.",
    "open your magic circuit and choose your partner.",
    "sweet voice, Melty blood",
    "The loss of twilight The will of heaven born in the chasm of doom is A small light stars that echo in prayer",
    "For the fervent desire of the creature waiteth when the sons of God shall be revealed",
    "turn your ear to my words.<br>Do not let them out of your sight,<br>keep them within your heart.",
    "But now being freed from sin,and made servants unto God, ye have your fruit in holiness, and the end,everlasting life.",
    "and I will make you fishers of men."
]

const body = document.getElementById("lyrical")

setInterval(() => {
    timer = Math.random() * MAX
    const randomTime = random(2, 4.1)
    const margin = random(3, 6)
    const newDiv = document.createElement("div")
    newDiv.className = "moving-text"
    newDiv.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
    newDiv.style.top = random(10, 90) + "%"

    if (Math.random() >= 0.5){
        newDiv.style.animation = `moveFade ${randomTime}s steps(90)`
        newDiv.style.left = margin + "vw"
    }else{
        newDiv.style.animation = `moveFadeLeft ${randomTime}s steps(90)`
        newDiv.style.right = margin + "vw"
    }

    body.appendChild(newDiv)
    newDiv.addEventListener("animationend", () => {
        newDiv.remove()
    })
}, timer)