const toggleShow = ($el) => {
  $('.show').addClass('hide');
  $('.show').removeClass('show');

  $el.removeClass('hide');
  $el.addClass('show');
};

const clearDetail = ($el) => {

};

document.addEventListener("DOMContentLoaded", () => {
  const clickHandler = (e) => {
    console.log(e.currentTarget);
    let $el = $(e.target);

    if ($el.hasClass("hide")) {
      toggleShow($el);
    }
  };

  $('.meat-links').click("li", clickHandler);
});
