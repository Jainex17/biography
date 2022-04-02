// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let bollyactArrow = document.querySelector(".bollyact-arrow");
bollyactArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let cbArrow = document.querySelector(".cb-arrow");
cbArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};

//select js
$(function () {
  // bind change event to select
  $("#dynamic_select").on("change", function () {
    var url = $(this).val();
    if (url) {
      window.location = url;
    }
    return false;
  });
});

