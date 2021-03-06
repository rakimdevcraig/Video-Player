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
        videoElem.currentTime = 0
        videoElem.pause()
    }
    
    //update play/pause icon
    //got it working with innerhtml but that is a bad way to update the dom so we found a better way with classList
    function updatePlayIcon(){
        //if video is paused we want to see the play button
        if(videoElem.paused){
            // playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>'
            iclass.classList.remove('fa-pause')
            iclass.classList.add('fa-play')
        }else{
            //if video is playing we want to see the pause button
            // playButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
            iclass.classList.remove('fa-play')
            iclass.classList.add('fa-pause')
        }
    }
    
    //update progress & timestamp
    function updateProgress(){
        // console.log(videoElem.currentTime)
        //will update the progress bar in realtime
        progressBar.value = (videoElem.currentTime / videoElem.duration) * 100
    }

    //change time when progress bar is clicked
    function setVideoProgress(){
        videoElem.currentTime = (+progressBar.value * videoElem.duration) / 100
    }

    //event listeners
  videoElem.addEventListener('click', toggleVideoStatus)
  videoElem.addEventListener('pause', updatePlayIcon)
  videoElem.addEventListener('play', updatePlayIcon)
  videoElem.addEventListener('timeupdate', updateProgress)
  
    playButton.addEventListener("click", toggleVideoStatus, false);
  
    stopButton.addEventListener("click", stopVideo, false);

    progressBar.addEventListener("change", setVideoProgress, false);

  
  
  