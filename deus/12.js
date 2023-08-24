const lyrics = `僕が泣いているのはとても悔しいからです人の尊さやさしさ踏みにじられそうで力を示す者達はしなやかさを失ってウソまみれドロまみれじれったい風景でしょうより強くしたたかにタフな生き方をしましょうまっすぐ歩きましょう風は向かい風どけどけどけ後ろめたい奴はどけ有象無象の町に灯りをともせどけそこどけ真実のお通りだ正義の時代がくるさ希望の歌もあるさ僕の命この世に捧げてしまっていいさどけどけどけどけ情をなくした奴はどけ生きる者すべてが愛でつながれるどけどけそこどけ正直のお通りだアナタの為の僕さ悔し涙のままさたぎる情熱の僕さゆれる心のままさ僕の命アナタに捧げてしまっていいさ僕の命この世に捧げてしまっていいさ`
const lyricsArr = lyrics.split("")
let s = []
let i = 0
let limit = 55
let first = false

function loop() {


    if(i < limit && !first) s.push(lyricsArr[i])
    else{
        if(i < limit){
            s[i] = lyricsArr[i]
        }
        else if(i === lyricsArr.length-1){
            first = true
            i = -1
        }else {
            console.log(i-((Math.floor(i / limit)) * limit))
            s[i-((Math.floor(i / limit)) * limit)] = lyricsArr[i]
        }
    } 
    i++
    location.hash = s.join("");
    setTimeout(loop, 100);
}

loop();