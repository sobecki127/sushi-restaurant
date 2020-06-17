$(document).ready(function () {
  let clickHandler = (obj) => {
    let { button, elements, delay, open } = obj;
    button.on("click", () => {
      for (let el of elements) {
        setTimeout(() => {
          el.item.toggleClass("active");
        }, el.delay);
      }
    });
  };

  let navObj = {
    button: $(".nav__toggle-btn"),
    elements: [
      {
        item: $(".nav__hamburger"),
        delay: 0,
      },
      {
        item: $(".nav__slider"),
        delay: 500,
      },
      {
        item: $(".nav__sidebar"),
        delay: 500,
      },
    ],
  };

  let reserveObj = {
    button: $(".reserve__btn"),
    elements: [
      {
        item: $(".reserve__btn"),
        delay: 0,
      },
      {
        item: $(".reserve__btn--close"),
        delay: 0,
      },
      {
        item: $(".reserve__slider"),
        delay: 0,
      },
    ],
  };

  clickHandler(reserveObj);
  clickHandler(navObj);
});
