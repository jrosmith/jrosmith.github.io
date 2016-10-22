import Util from './assets/util.js;';

document.addEventListener("DOMContentLoaded", () => {
  const clickHandler = (e) => {
    let $el = $(e.target);

    if ($el.hasClass("hide")) {
      Util.toggleShow($el);
    }

  };

  $('.meat-links').click("li", clickHandler);
});
