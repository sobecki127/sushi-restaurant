$(document).ready(function () {
  let clear = (obj) => {
    let { elements } = obj;
    for (let el of elements) {
      el.item.removeClass("active");
    }
  };

  // let toggleText = (el, text) => {
  //   el.on("click", () => {
  //     let temp = el.text();
  //     console.log(temp);
  //     el.empty().append(temp);
  //   });
  // };

  // let home = "Home";
  // toggleText($(".reserve__btn"), home);

  // $(".reserve__btn").on("click", function () {
  //   $(".reserve__btn").html("test");
  //   console.log("test");
  // });

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
        text: "Home",
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

  clickHandler(reserveObj, navObj);
  clickHandler(navObj, reserveObj);
});
