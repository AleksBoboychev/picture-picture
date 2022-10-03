const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass - video element, and play

async function selectMediaStream(){
      try {
            const mediaStream = await navigator.mediaDevices.getDisplayMedia();
            videoElement.srcObject = mediaStream;
            videoElement.onloadedmetadata = () => {
                  videoElement.play();
            }
      }catch (error){
            // Catch Error Here
            console.log('Ohh shit',error);
      }
}
button.addEventListener('click', async() => {
   button.disable = true;
      // Start picture in picture
      await videoElement.requestPictureInPicture();
      // Reset button
      button.disabled = false;
});

selectMediaStream();