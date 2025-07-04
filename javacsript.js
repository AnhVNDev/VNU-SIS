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

document.addEventListener("DOMContentLoaded", function () {
  jsPlumb.ready(function () {
    jsPlumb.setContainer("orgchart");
    // Kết nối sơ đồ
    jsPlumb.connect({
      source: "danguy",
      target: "hoidong",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
      paintStyle: { stroke: "#003366", strokeWidth: 1 },
    });
    jsPlumb.connect({
      source: "danguy",
      target: "bangiamhieu",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
      paintStyle: { stroke: "#003366", strokeWidth: 1 },
    });
    jsPlumb.connect({
      source: "danguy",
      target: "tochucdoanthe",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
      paintStyle: { stroke: "#003366", strokeWidth: 1 },
    });
    jsPlumb.connect({
      source: "bangiamhieu",
      target: "donvikh",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
      paintStyle: { stroke: "#003366", strokeWidth: 1 },
    });
    jsPlumb.connect({
      source: "bangiamhieu",
      target: "khoachuyenmon",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
      paintStyle: { stroke: "#003366", strokeWidth: 1 },
    });
    jsPlumb.connect({
      source: "bangiamhieu",
      target: "phongchucnang",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
      paintStyle: { stroke: "#003366", strokeWidth: 1 },
    });
    jsPlumb.connect({
      source: "donvikh",
      target: "trungtam",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "donvikh",
      target: "phongtn",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "trungtam",
      target: "tapchi",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "khoachuyenmon",
      target: "k1",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "khoachuyenmon",
      target: "k2",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "khoachuyenmon",
      target: "k3",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "khoachuyenmon",
      target: "k4",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "phongchucnang",
      target: "p1",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "phongchucnang",
      target: "p2",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "phongchucnang",
      target: "p3",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "phongchucnang",
      target: "p4",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
    jsPlumb.connect({
      source: "phongchucnang",
      target: "p5",
      anchors: ["Bottom", "Top"],
      endpoint: "Blank",
      connector: "Flowchart",
    });
  });
});

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
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
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
});
