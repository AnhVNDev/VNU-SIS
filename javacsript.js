// carouselElement
// const carouselElement = document.querySelector("#eventCarousel");
// if(carouselElement) {
//   const carouselIndicators = document.querySelectorAll(
//     ".custom-indicators button"
//   );

//   const carousel = new bootstrap.Carousel(carouselElement, {
//     interval: 1000,
//     wrap: true,
//   });

//   carouselElement.addEventListener("slide.bs.carousel", (event) => {
//     carouselIndicators.forEach((indicator) =>
//       indicator.classList.remove("active")
//     );
//     carouselIndicators[event.to].classList.add("active");
//   });
// }

// side menu ---------------------------
const menuItems = document.querySelectorAll(".side-menu .menu-item");
if (menuItems) {
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      const targetId = item.getAttribute("data-target");
      const subMenu = document.getElementById(targetId);
      subMenu.classList.toggle("open");
    });
  });
}

// navbar
function toggleSubmenu(event, submenuId) {
  event.preventDefault();
  const navItem = event.target.closest(".nav-item");
  const allNavItems = document.querySelectorAll(".nav-item");

  allNavItems.forEach((item) => {
    if (item !== navItem) {
      item.classList.remove("show");
      const link = item.querySelector(".nav-link");
      if (link) link.classList.remove("active");
    }
  });

  navItem.classList.toggle("show");
  const link = navItem.querySelector(".nav-link");
  if (link) link.classList.toggle("active");
}

$(document).ready(function () {
  $("#owl-carousel-portal").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
  });
  $("#owl-carousel-event").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
    onChanged: updateCustomDots,
  });
  $("#owl-carousel-event-1").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
    onChanged: updateCustomDots,
  });
  $("#owl-carousel-event-2").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
    onChanged: updateCustomDots,
  });
  $("#owl-carousel-news").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  });
   $("#owl-carousel-cop").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 6 },
    },
  });
});

$(".custom-dots .dot").click(function () {
  const index = $(this).data("dot");
  $("#owl-carousel-event").trigger("to.owl.carousel", [index, 300]);
});

function updateCustomDots(event) {
  const index = event.item.index - event.relatedTarget._clones.length / 2;
  const total = event.item.count;
  const currentIndex = ((index % total) + total) % total; // để xử lý số âm do loop

  $(".custom-dots .dot").removeClass("active");
  $(".custom-dots .dot").eq(currentIndex).addClass("active");
}
