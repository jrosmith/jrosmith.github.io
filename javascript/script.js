const contactClick = () => {
  console.log("hit contactClick");
  const contactHTML = '\
          <ul class="contact-meat">\
            <li>\
              <a href="https://github.com/jrosmith">\
                <i className="fa fa-github-square" aria-hidden="true"></i>\
              </a>\
            </li>\
            \
            <li>\
              <a href="https://linkedin.com/in/smithjoshr">\
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>\
              </a>\
            </li>\
            \
            <li>\
              <a href="mailto:smithjoshr@gmail.com">\
                <i className="fa fa-envelope" aria-hidden="true"></i>\
              </a>\
            </li>\
          </ul>';

  $('.meat-detail').append(contactHTML);
};

const portfolioClick = () => {
  console.log("hit portfolioClick");
  const portfolioHTML = '\
          <ul class="portfolio-meat">\
            <li>\
              <a href="https://www.blandcramp.com">\
                Blandcramp\
              </a>\
            </li>\
            <li>\
              <a href="https://www.colorblock.com">\
                Colorblock\
              </a>\
            </li>\
            <li>\
              <a href="https://github.com/jrosmith/FastApp">\
                FastApp\
              </a>\
            </li>\
          </ul>';

  $('.meat-detail').append(portfolioHTML);
};

const skillClick = () => {
  const skillHTML = '\
          <ul class="devicons">\
            <li><i class="devicon-amazonwebservices-plain-wordmark"></i></li>\
            <li><i class="devicon-css3-plain-wordmark"></i></li>\
            <li><i class="devicon-git-plain-wordmark"></i></li>\
            <li><i class="devicon-heroku-plain-wordmark"></i></li>\
            <li><i class="devicon-html5-plain-wordmark"></i></li>\
            <li><i class="devicon-javascript-plain"></i></li>\
            <li><i class="devicon-jquery-plain"></i></li>\
            <li><i class="devicon-postgresql-plain-wordmark"></i></li>\
            <li><i class="devicon-rails-plain-wordmark"></i></li>\
            <li><i class="devicon-react-original-wordmark"></i></li>\
            <li><i class="devicon-ruby-plain-wordmark"></i></li>\
          </ul>';

  $('.meat-detail').append(skillHTML);
};

const aboutClick = () => {
  const aboutHTML = '\
          <p class="about-meat">\
            I am web developer with an extensive background in physics, physics education, and physics education reserach. In my spare time, I enjoy spoiling my bluetick coonhound, shooting pool, and playing guitar.\
          </p>';

  $('.meat-detail').append(aboutHTML);
};

const clearDetail = () => {
  $('.meat-detail').html("");
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
    case "Portfolio":
      portfolioClick();
      break;
    default:
      console.log( "something is fucked" );
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
