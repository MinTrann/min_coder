const btn = document.querySelector('.btnplay')
const imgPlay = document.querySelector('.imgplay')
const btnOff = document.querySelector('.btnoff')
const playBtn = document.querySelector('.play-btn')
const playIcon = document.querySelector('.play-icon')
const progressLine = document.querySelector('.progress-line')
const audio = new Audio('./asset/music/X2Download.app - Westlife -  Beautiful in white (Lyrics) (320 kbps).mp3')
playBtn.onclick = function(){
    const isPlaying = !audio.paused
    playIcon.name = isPlaying ? 'play': 'pause'
    if(isPlaying){
        audio.pause()
        imgPlay.classList.remove('ani-img')
    }
    else{
        audio.play()
        interval = setInterval(() =>{
                    progressBar()
        },1000)
        imgPlay.classList.add('ani-img') 
    }
}
// * 
function progressBar(){
    const ducation = audio.duration
    let currentTime = audio.currentTime 
    if(currentTime >= ducation){
        audio.currentTime = 0
        imgPlay.classList.remove('ani-img')
        playIcon.name = 'play'
    }
    progressLine.style.width =(currentTime /ducation) * 100 + '%'
}
//
console.log(alert("Khả Khả 🙃🙃🙃"));


   
  
