// basic-N1 [ayM4I5MOrM]
(function () {
  $(function () {
    $(".basic-N1").each(function () {
      const $block = $(this);
      const $dim = $block.find(".header-dim");
      // Header Scroll
      $(window).on("load scroll", function () {
        const $thisTop = $(this).scrollTop();
        if ($thisTop > 120) {
          $block.addClass("header-top-active");
        } else {
          $block.removeClass("header-top-active");
        }
      });
      // Mobile Lang
      $block.find(".header-langbtn").on("click", function () {
        $(this).parent().toggleClass("lang-active");
      });
      // Mobile Top
      $block.find(".btn-momenu").on("click", function () {
        $block.addClass("momenu-active");
        $dim.fadeIn();
      });
      $block.find(".btn-close, .header-dim").on("click", function () {
        $block.removeClass("momenu-active");
        $dim.fadeOut();
      });
      // Mobile Gnb
      $block.find(".header-gnbitem").each(function () {
        const $this = $(this);
        const $thislink = $this.find(".header-gnblink");
        const $gnblink = $(this).find(".header-gnblink");
        const $sublist = $(this).find(".header-sublist");
        $thislink.on("click", function () {
          if (!$(this).parent().hasClass("item-active")) {
            $(".header-gnbitem").removeClass("item-active");
          }
          $(this).parents(".header-gnbitem").toggleClass("item-active");
        });
        // Header Mobile 1Depth Click
        if (window.innerWidth <= 992) {
          $block.find(".btn-momenu").on("click", function () {
            $block.addClass("mo-active");
            if ($sublist.length) {
              $gnblink.attr("href", "javascript:void(0);");
            }
          });
        }
      });
      // Menu Btn Click Gnb
      $block.find(".btn-allmenu").on("click", function () {
        $block.addClass("header-menuactive");
        $dim.fadeIn();
      });
      $block.find(".btn-close, .header-dim").on("click", function () {
        $block.removeClass("header-menuactive");
        $dim.fadeOut();
      });
    });
  });
})();
// basic-N5 [hnM4i5MOWj]
(function () {
  $(function () {
    $(".basic-N5").each(function () {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".basic-N5 .contents-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".basic-N5 .swiper-pagination",
          type: "fraction",
          clickable: true,
          renderFraction: function (currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              '<span class="contents-deco"></span>' +
              '<span class="' +
              totalClass +
              '"></span>'
            );
          },
        },
        navigation: {
          nextEl: ".basic-N5 .swiper-button-next",
          prevEl: ".basic-N5 .swiper-button-prev",
        },
      });
      // Swiper Play, Pause Button
      const pauseButton = $block.find(".swiper-button-pause");
      const playButton = $block.find(".swiper-button-play");
      playButton.hide();
      pauseButton.show();
      pauseButton.on("click", function () {
        swiper.autoplay.stop();
        playButton.show();
        pauseButton.hide();
      });
      playButton.on("click", function () {
        swiper.autoplay.start();
        playButton.hide();
        pauseButton.show();
      });
    });
  });
})();
// basic-N9 [QqM4i5MPai]
(function () {
  $(function () {
    $(".basic-N9").each(function () {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".basic-N9 .contents-swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: ".basic-N9 .swiper-button-next",
          prevEl: ".basic-N9 .swiper-button-prev",
        },
      });
    });
  });
})();

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector(".btn-momenu");
const closeMenuBtn = document.querySelector(".btn-close");
const headerDim = document.querySelector(".header-dim");
const header = document.querySelector("header");

if (mobileMenuBtn && closeMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    header.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeMenuBtn.addEventListener("click", () => {
    header.classList.remove("active");
    document.body.style.overflow = "";
  });

  headerDim.addEventListener("click", () => {
    header.classList.remove("active");
    document.body.style.overflow = "";
  });
}

// Partners section infinite scroll
const flowText = document.querySelector(".flow-text");
if (flowText) {
  // Pause animation on hover
  flowText.addEventListener("mouseenter", () => {
    flowText.style.animationPlayState = "paused";
  });

  flowText.addEventListener("mouseleave", () => {
    flowText.style.animationPlayState = "running";
  });
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Responsive image loading
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
});
