const gallaryImgNav = document.querySelectorAll(".ImgHov li img");
const gallaryBigImage = document.querySelector(".galleryBigImg img");

let currentIndex = 0;

function updateBigImage(index) {
  gallaryBigImage.src = gallaryImgNav[index].src;
}

gallaryImgNav.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    updateBigImage(currentIndex);
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % gallaryImgNav.length;
  updateBigImage(currentIndex);
}, 4000);




