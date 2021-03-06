let videoElem = document.querySelector('.screen');
let playButton = document.querySelector('.play')
let stopButton = document.querySelector('.stop')
let progressBar = document.querySelector('.progress')
let timeStamp = document.querySelector('.timeStamp')
let iclass = document.querySelector('.iclassplay')

    //play and pause video
    function toggleVideoStatus(){
        if(videoElem.paused){
            videoElem.play()
        }else{
            videoElem.pause()
        }
    }

    function stopVideo(){
        videoElem.pause()
    }
    
    //update play/pause icon
    function updatePlayIcon(){
        if(videoElem.paused){
            // playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>'
            iclass.classList.remove('fa-pause')
            iclass.classList.add('fa-play')
        }else{
            // playButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
            iclass.classList.remove('fa-play')
            iclass.classList.add('fa-pause')

        }
    }
    
    //update progress & timestamp
    function updateProgress(){
        return true
    }

    //change time when progress bar is clicked
    function setVideoProgress(){
        return true
    }



    //event listeners
  videoElem.addEventListener('click', toggleVideoStatus)
  videoElem.addEventListener('pause', updatePlayIcon)
  videoElem.addEventListener('play', updatePlayIcon)
  videoElem.addEventListener('timeupdate', updateProgress)
  
    playButton.addEventListener("click", toggleVideoStatus, false);
  
    stopButton.addEventListener("click", stopVideo, false);

    progressBar.addEventListener("change", setVideoProgress, false);

  
  
  
  function handlePlayButton() {
    if (videoElem.paused) {
      playVideo();
    } else {
      videoElem.pause();
      playButton.classList.remove("playing");
    }
  }