export const contactClick = () => {
  const aboutHtml = '\
          <ul>\
            <li></li>\
            <li></li>\
            <li><a href=""></a></li>\
          </ul>';

  $('.meat-detail').append(aboutHtml);
};

export const skillClick = () => {
  const aboutHtml = '\
          <ul>\
            <li></li>\
            <li></li>\
            <li></li>\
            <li></li>\
            <li></li>\
            <li></li>\
            <li></li>\
            <li></li>\
            <li></li>\
            <li></li>\
            <li></li>\
            <li></li>\
            <li></li>\
            </ul>';

  $('.meat-detail').append(aboutHtml);
};

export const aboutClick = () => {
  const aboutHtml = '\
          <p class="about-meat">\
            I am web developer with an extensive background in physics, physics education, and physics education reserach. In my spare time, I enjoy spoiling my bluetick coonhound, shooting pool, and playing guitar.\
          </p>';

  $('.meat-detail').append(aboutHtml);
};

export const clearDetail = () => {
  $('.meat-detail').html("");
};

export const appendToDetail = (text) => {
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

export const toggleShow = ($el) => {
  $('.show').addClass('hide');
  $('.show').removeClass('show');

  $el.removeClass('hide');
  $el.addClass('show');
  clearDetail();
  appendToDetail($el.text());
};
