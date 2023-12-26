const startBtnEl = document.querySelector("#start-btn");
const captureBtnEl = document.querySelector("#capture-btn");
const videoEl = document.querySelector("#video");

const pictureInPicture = async () => {
  try {
    await videoEl.requestPictureInPicture();
  } catch (error) {
    console.log(error);
  }
};

const selectMediaStream = async () => {
  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = captureStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {
    console.log(error);
  }
};

captureBtnEl.addEventListener("click", () => {
  startBtnEl.disabled = false;
  selectMediaStream();
});

startBtnEl.addEventListener("click", () => {
  pictureInPicture();
});
