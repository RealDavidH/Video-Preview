console.log("page loaded...");



let video = document.querySelector("video")
let isPlay = 0;
function video_play(){
    if(isPlay === 1){
        video.pause()
        isPlay--
    }
    else if (isPlay === 0){
        video.play();
        isPlay++
    }
}