const clearDetail = () => {
  $('.meat-detail').html("");
};

const contactClick = () => {
  return(console.log('contact'));
};

const skillClick = () => {
  return(console.log('skill'));
};

const aboutClick = () => {
  return(console.log('about'));
};

const appendToDetail = (text) => {
  switch (text) {
    case "Contact":
      contactClick();
      break;
    case "About":
      aboutClick();
      break;
    case "Skills":
      skillClick();
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
