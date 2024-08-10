console.log("i am running");
let songindex =0;
let audioElement= new Audio("music/shriRam.mp3");
let play=document.getElementById("play");
let range=document.getElementById("range")
let sonngs = [
    { songname: "jai shri ram", filePath: "music/shriRam.mp3"}
]
play.addEventListener("click",()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove("fa-play");
        play.classList.add( "fa-pause")
    }
    else{
        audioElement.pause();
        play.classList.remove("fa-pause");
        play.classList.add( "fa-play")

    }
})
audioElement.addEventListener("timeupdate",()=>{
    
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    range.value=progress;

})