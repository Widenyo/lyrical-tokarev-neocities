const scrollEl = document.getElementById('scroll')
const items = [
 '<br>',
 'wipe your tears and howl', 
 'but you’ll remember without fail the vows you made with your beloved', 
 'draw forth the sword that smites evil', 
 'justice awakens in the hate-scorched skies',
 'hold your righteous anger in your heart',
 'draw the innocent blade',
 'ye not guilty',
 'for everyone who exalts himself will be humbled',
 'for his kingdom is not of this world',
 'for he is with us to the end of time',
 'he gave his only Son',
 'whoever believes in him should not perish but have eternal life.',
 'thy shall delight in the abundance of peace']



setInterval(() =>{
    const h3s= scrollEl.getElementsByTagName('h3')
    scrollEl.removeChild(h3s[0])
    scrollEl.innerHTML += `<h3>${items[Math.floor(Math.random()*items.length)]}</h3>`
}, 31)