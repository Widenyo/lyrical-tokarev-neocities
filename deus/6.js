let bgs = []
const lyrical =  document.getElementById('lyrical')
const doorpath = 'https://resources.lyricaltokarev.fun/cloudinary/door'

async function wrapper(){
    await getBgs()
    changeBgImg(getRandomBg().url)
    await changeBgAndBlink()
}

async function getBgs(){
    const res = await fetch(doorpath)
    const json = await (await res.json()).data.files
    bgs = json.filter(b => {
        return b.filename !== 'ayana.jpg'
    })
    const localbgs = [];
    const formattedbgs = localbgs.map((bgname) => {
        return '../LOLZ/'+bgname
    })
    bgs = [...bgs, ...formattedbgs]
}

  
  const changeBgImg = (bg) => {
    console.log(bg)
    lyrical.style.background = `url(${bg}) no-repeat center center fixed`
    lyrical.style.backgroundColor = `black`
    lyrical.style.backgroundSize = '100% 100%'
  }
  
  const getRandomBg = () =>{
    const randomIndex = Math.floor(Math.random()*bgs.length)
    return bgs[randomIndex];
  } 
  
  const blink = async (bg, i, duration) => {
      let blinkDuration = duration || randomInt(111, 999)
      if(probability(0.50, i)){
        lyrical.style.background = `black`
        lyrical.style.backgroundSize = '100% 100%'
      }
      else if(probability(0.50, i)){
        blinkDuration = 433
        changeBgImg('../Vpo.gif', '')
      }else if(probability(0.50) || i % 3 === 0){
        blinkDuration = 407
        changeBgImg(getRandomBg().url)
      }
      else{
        blinkDuration = 213
        changeBgImg('https://res.cloudinary.com/dptqk9qvc/image/upload/v1670981432/door/ayana.jpg.jpg')
      }   
      await sleep(changeBgImg, blinkDuration, [bg])
  }
  
  

function randomInt(min, max) {
return (Math.floor(Math.random() * (max - min + 1) + min))
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn, time, params = []) {
  await timeout(time);
  return fn(...params);
}

const probability = function(n, i = 1) {
    const random = Math.random()
    return (!!n && random <= n) && i % 3 !== 0;
};


  const changeBgAndBlink = async () => {
    let bg = getRandomBg()
    changeBgImg(bg)
      for(let i = 1; i < randomInt(9, 13); i++){
        const blinkWaitTime = randomInt(444, 1555)
        await sleep(blink, blinkWaitTime, [bg, i])
      }
      changeBgImg('../Vpo.gif', '')
      await sleep(changeBgAndBlink, randomInt(1007, 2777))
  }

    wrapper()