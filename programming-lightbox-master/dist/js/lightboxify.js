// here is our L33T H4XX0R lightbox code

// IIFE: Immediately invoked function expression
// function that calls itself right away

(function () {
  console.log("hello world for from an IIFE");
})();

(function () {
  window.lightboxify = function (selector, userOptions) {
    let options = {
      // defaults
      backgroundColor: "black",
      hideCloseButton: false,
      // jeffrey's
      ...userOptions,
    };
    console.log(options);

    var lightboxLinks = document.querySelectorAll(selector);
    lightboxLinks.forEach(function (lightboxLink) {
      // lightboxLink.style.border = "solid 5px red";
      lightboxLink.addEventListener("click", function (event) {
        // console.log("hello world");
        event.preventDefault();

        //makes overlay
        let lightboxOverlay = document.createElement("div");
        lightboxOverlay.classList.add("lightbox-overlay");
        lightboxOverlay.classList.add("hidden");
        document.body.appendChild(lightboxOverlay);
        lightboxOverlay.style.backgroundColor = options.backgroundColor;
        setTimeout(function () {
          lightboxOverlay.classList.remove("hidden");
        }, 50);

        //makes lightbox
        let lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        document.body.appendChild(lightbox);
        setTimeout(function () {
          lightbox.style.opacity = 1;
          lightbox.style.transform = "translate(-50%, -50%)";
        }, 50);

        //pull img src
        let imageSrc = this.href; //gets reference for clicked thumbnail
        // console.log(this);

        //appends image
        let lightboxImage = document.createElement("img");
        lightboxImage.setAttribute("src", imageSrc);
        lightbox.appendChild(lightboxImage);

        //make close button
        let lightboxClose = document.createElement("div");
        lightboxClose.classList.add("lightbox-close");
        if (!options.hideCloseButton) {
          lightbox.appendChild(lightboxClose);
        }

        //make close button close the lightbox
        lightboxClose.addEventListener("click", closeLightbox);
        lightboxOverlay.addEventListener("click", closeLightbox);

        //when animating, set timeout to delay functions after animating
      });
    });
  };

  window.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      console.log("escape key pressed", event);
      closeLightbox();
    }
  });

  let closeLightbox = function () {
    let lightbox = document.querySelector(".lightbox");
    let lightboxOverlay = document.querySelector(".lightbox-overlay");
    if (lightbox) {
      lightbox.style.opacity = 0;
      lightbox.style.transform = "translate(-50%, -50%) scale(5)";
      setTimeout(function () {
        lightbox.remove();
      }, 1000);
    }
    if (lightboxOverlay) {
      lightboxOverlay.classList.add("hidden");
      setTimeout(function () {
        lightboxOverlay.remove();
      }, 1000);
    }
  };
})();
//make clicking background close the lightbox
//bonus: make esc key close lightbox
//bonus: animate elements appearing/disappearing, fade in background, zoom effect on images
