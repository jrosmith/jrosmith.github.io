const clearDetail = () => {
  $('.meat-detail').html("");
};

const appendToDetail = (text) => {
  switch (text) {
    case "Contact":
      console.log("CONTACT CLICKED");
      break;
    case "About":
      console.log("ABOUT CLICKED");
      break;
    case "Skills":
      console.log("SKILLS CLICKED");
      break;
    default:
      console.log( "ya fucked up" );
  }
};

const toggleShow = ($el) => {
  $('.show').addClass('hide');
  $('.show').removeClass('show');

  $el.removeClass('hide');
  $el.addClass('show');
  clearDetail();
  appendToDetail($el.text());
};



document.addEventListener("DOMContentLoaded", () => {
  const clickHandler = (e) => {
    let $el = $(e.target);

    if ($el.hasClass("hide")) {
      toggleShow($el);
    }

  };

  $('.meat-links').click("li", clickHandler);
});
