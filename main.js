$(document).ready(function () {
  // ================ test ================
  // https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    //
    clear(navObj);
    //
    setTimeout(() => {
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        500
      );
      //
    }, 300);
  });
  /*
=========================================
*/
  // Clears .active off an obj.element.item
  let clear = (obj) => {
    let { elements } = obj;
    for (let el of elements) {
      el.item.removeClass("active");
    }
  };

  // Passed two objects: first to make active, second to take off active
  // Toggles .active with a delay // prev is passed to clear
  let clickHandler = (current, prev) => {
    let { button, elements, delay } = current;
    button.on("click", () => {
      clear(prev);
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
        delay: 200,
      },
      {
        item: $(".nav__sidebar"),
        delay: 200,
      },
    ],
  };

  let reserveObj = {
    button: $(".reserve__btn"),
    elements: [
      {
        item: $(".reserve__btn"),
        delay: 200,
      },
      {
        item: $(".reserve__btn--close"),
        delay: 200,
      },
      {
        item: $(".reserve__slider"),
        delay: 200,
      },
    ],
  };

  //
  clickHandler(reserveObj, navObj);
  clickHandler(navObj, reserveObj);

  // fullscreen slider
  // https://www.jqueryscript.net/animation/touch-fullscreen-scrolling.html
  // $("#fullpage").fullpage();
});
