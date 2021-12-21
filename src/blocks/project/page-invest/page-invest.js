// const allListBtn = document.querySelector(".invest__all");
const elements = document.querySelectorAll(".invest__parametr");
const playVideoBtn = document.querySelector(".invest__link-img");
const videoContainer = document.querySelector(".invest__video");
const videoCloseBtn = document.querySelector(".invest__video-close");
const videoPlayer = document.querySelector(".js-invest__video-player");

videoCloseBtn.addEventListener("click", () => {
    videoContainer.classList.remove("invest__video_active");
    videoPlayer.pause();
});

playVideoBtn.addEventListener("click", () => {
    videoContainer.classList.add("invest__video_active");
    videoPlayer.play();
});

// allListBtn.addEventListener("click", () => {
//     elements.forEach((element) => {
//         element.classList.toggle("invest__parametr_all");
//     });
//     allListBtn.textContent === "Раскрыть весь список" ? (allListBtn.textContent = "Свернуть весь список") : (allListBtn.textContent = "Раскрыть весь список");
// });
