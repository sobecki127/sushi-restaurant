$(document).ready(function () {
  // opens navigation
  $(".nav__toggle-button").click(function () {
    $(".nav__slider").toggleClass("active", 500);
    $(".nav__sidebar").toggleClass("active", 500);
    $(".nav__hamburger").toggleClass("active", 500);
    // $(this).toggleClass("open");
  });

  $(".reserve__btn").click(function () {
    $(".reserve__slider").toggleClass("active", 500);
    $(".reserve__btn").toggleClass("active", 500);
  });
});
