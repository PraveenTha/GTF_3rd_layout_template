document.addEventListener("DOMContentLoaded", function () {
  // Header section
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const popUpForm = document.querySelector(".popUpForm");

    if (window.pageYOffset > 100) {
      // When scrolled down
      header.classList.add("sticky");
      popUpForm.classList.add("hide-popup");
      popUpForm.classList.remove("show-popup");
    } else {
      // When at top
      header.classList.remove("sticky");

      if (window.innerWidth <= 767 && !sessionStorage.getItem("popupShown")) {
        // Small screens: show once
        popUpForm.classList.add("show-popup");
        popUpForm.classList.remove("hide-popup");
        sessionStorage.setItem("popupShown", "true");
      } else if (window.innerWidth >= 1100) {
        // Large screens: always show at top
        popUpForm.classList.add("show-popup");
        popUpForm.classList.remove("hide-popup");
      } else {
        // For mid-range widths (768px to 991px): keep hidden
        popUpForm.classList.add("hide-popup");
        popUpForm.classList.remove("show-popup");
      }
    }
  });

  //amenities section

  const slideBox = document.querySelector(".slide_box");
  const slides = document.querySelectorAll(".slides");
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    slideBox.appendChild(clone);
  });

  let images = document.querySelectorAll(".slides img");
  let imgDiscription = document.querySelectorAll(".aminities_contant p");
  const aminitiesLightBox = document.createElement("div");
  aminitiesLightBox.classList.add("lightBox");

  const imgElement = document.createElement("img");
  const imgDis = document.createElement("p");
  const closeBtn = document.createElement("span");

  const prevBtn = document.createElement("span");
  const nextBtn = document.createElement("span");

  images.forEach((image, index) => {
    image.style.cursor = "zoom-in";
    image.addEventListener("click", () => {
      document.body.appendChild(aminitiesLightBox);

      aminitiesLightBox.appendChild(imgElement);
      imgElement.src = image.src;

      aminitiesLightBox.appendChild(imgDis);
      imgDis.textContent =
        imgDiscription[index]?.textContent || "No description available";

      aminitiesLightBox.appendChild(prevBtn);
      prevBtn.textContent = "<";
      prevBtn.className = "prev_btn";
      prevBtn.style.cursor = "pointer";

      prevBtn.addEventListener("click", () => {
        images[index - 1]?.click();
      });

      aminitiesLightBox.appendChild(nextBtn);
      nextBtn.textContent = ">";
      nextBtn.className = "next_btn";
      nextBtn.style.cursor = "pointer";

      nextBtn.addEventListener("click", () => {
        images[index + 1]?.click();
      });

      aminitiesLightBox.appendChild(closeBtn);
      closeBtn.textContent = "X";
      closeBtn.className = "close_lightbox";
      closeBtn.style.cursor = "pointer";

      closeBtn.addEventListener("click", () => {
        aminitiesLightBox.remove();
      });
    });
  });

  // Select elements
  const readMore = document.querySelector(".read-mor-les");
  const readOut = document.querySelector(".read-out");
  readMore.style.cursor = "pointer";
  readMore.addEventListener("click", () => {
    if (readOut.style.display === "block") {
      readOut.style.display = "none";
      readMore.textContent = "Read more";
      readMore.classList.add("read-mor-les");
      readMore.classList.remove("read-less");
    } else {
      readOut.style.display = "block";
      readMore.textContent = "Read less";
      readMore.classList.add("read-less");
      readMore.classList.remove("read-mor-les");
    }
  });

  //pop form
  const openPop = document.querySelectorAll(".open_pop");
  const popUpForm = document.querySelector(".popUpForm");

  const closePop = document.querySelector(".close_pop");
  closePop.addEventListener("click", () => {
    popUpForm.classList.remove("show-popup");
    popUpForm.classList.add("hide-popup");
  });

  openPop.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (popUpForm.classList.contains("show-popup")) {
        popUpForm.classList.remove("show-popup");
      } else {
        popUpForm.classList.add("show-popup");
        popUpForm.classList.remove("hide-popup");
      }
    });
  });

  const toggleButtons = document.querySelectorAll("#open_pop_main");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      popUpForm.classList.toggle("show-popup");
      popUpForm.classList.toggle("hide-popup");
    });
  });

  // Mobile toggle menu
  const mbMenuToggleBtn = document.querySelector("#desktop_ham");
  const mbMenu = document.querySelector(".menu_bar ul.menu");

  mbMenuToggleBtn.style.cursor = "pointer";

  mbMenuToggleBtn.addEventListener("click", () => {
    mbMenu.classList.toggle("open_menu"); // Toggle open/close
    mbMenuToggleBtn.classList.toggle("close_menu"); // Toggle class on the button itself
  });

  // Close menu when clicking a menu link
  const mbMenuLinks = document.querySelectorAll(".menu_bar ul.menu li");
  mbMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mbMenu.classList.remove("open_menu");
      mbMenuToggleBtn.classList.remove("close_menu");
    });
  });
});
