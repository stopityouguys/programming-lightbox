"use strict";

var lightboxLinks = document.querySelectorAll(".lightboxify");
//# sourceMappingURL=main.js.map

document
  .querySelector(".lightboxify")
  .addEventListener("click", function (event) {
    console.log("hello world");
    event.preventDefault();
    //makes overlay
    let lightboxOverlay = document.createElement("div");
    lightboxOverlay.classList.add("lightbox-overlay");
    document.body.appendChild(lightboxOverlay);
    //makes lightbox
    let lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);
    //pull img src
    let imageSrc = document.querySelector(".thumbnail").src;
    //appends image
    let lightboxImage = document.createElement("img");
    lightboxImage.setAttribute("src", imageSrc);
    lightbox.appendChild(lightboxImage);
  });
