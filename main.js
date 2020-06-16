$(document).ready(function () {
  // Navigation
  $(".nav__toggle-btn").click(function () {
    $(".nav__slider").toggleClass("active", 500);
    $(".nav__sidebar").toggleClass("active", 500);
    $(".nav__hamburger").toggleClass("active", 500);
  });

  // Reservations open
  $(".reserve__btn").click(function () {
    $(".reserve_btn").toggleClass("active");
    $(".reserve__close-btn").toggleClass("active");
    $(".reserve__slider").toggleClass("active", 500);
    $(".reserve__btn").toggleClass("active", 500);
  });

  $(".reserve__close-btn").click(function () {
    $(".reserve_btn").toggleClass("active");
    $(".reserve__close-btn").toggleClass("active");
    $(".reserve__slider").toggleClass("active", 500);
    $(".reserve__btn").toggleClass("active", 500);
  });
});
