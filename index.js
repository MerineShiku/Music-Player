const container = document.querySelector(".container")
const prevBtn = document.querySelector("#prev")
const playBtn = document.querySelector("#play")
const nextBtn = document.querySelector("#next")
const audio=document.getElementById("audio")
const progress=document.querySelector(".progress")
const progressContainer=document.querySelector(".progress-container")
const title=document.querySelector("#song-title")
const cover=document.querySelector("#song-cover")
const loopBtn = document.querySelector("#loop")



const songs = ["jazzyfrenchy", "goinghigher", "happyrock","ukulele"]


let x =  Math.floor(Math.random() * 4);

//function to populate all the song details 

function renderSong(){

    
      
        title.innerText = songs[x]

        audio.src = `music/${songs[x]}.mp3`
        cover.src = `images/${songs[x]}.jpg`
 
        
      }


function playSong(){
    container.classList.add("play")
    playBtn.querySelector("i.fa").classList. remove("fa-play")
    playBtn.querySelector("i.fa").classList. add("fa-pause")

    audio.play() //starts playing audio
    
}

function pauseSong(){
    container.classList.remove("play")
    playBtn.querySelector("i.fa").classList.remove("fa-pause")
    playBtn.querySelector("i.fa").classList.add("fa-play")


    audio.pause() //Pauses the currently playing audio
   
}


function prevSong(){

   x--

    if (x < 0){
        x = songs.length -1

    }

    renderSong(songs[x])

  playSong()

}

function nextSong(){

    x++

    if (x >= songs.length ){
        x = 0

    }

    renderSong(songs[x])
    playSong()
    
}

function enableLoop() { 
    audio.loop = true;
    
  } 
  

  function updateProgress(event){
    
    const duration =audio.duration
    const currently = audio.currentTime

    //console.log(duration)
   // console.log(currently)
 
    const progressPercent = (currently/duration)* 100
    progress.style.width = `${progressPercent}%`
 

  }






  
    
     
playBtn.addEventListener("click", function(){
    
    const isPlaying =container.classList.contains("play")
 
    if (isPlaying){
        pauseSong()
    }else {
        playSong()
      
    }
 
 })

nextBtn.addEventListener("click", function (){
     

    nextSong()


})



prevBtn.addEventListener("click", function (){
     
    prevSong()

 })

loopBtn.addEventListener("click", function (){
     
    enableLoop()
    

})


//audio.addEventListener("timeupdate", updateProgress())
audio.addEventListener("ended", function(){
    nextSong()
})

document.addEventListener("DOMContentLoaded", function(event) {
    var audio = document.getElementsByTagName("audio")[0];
    audio.pause();
})

audio.addEventListener("timeupdate", function(){
    updateProgress()

})
