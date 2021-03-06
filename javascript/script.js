const contactClick = () => {
  const contactHTML = `
          <ul class="contact-meat">
            <li class="fade-in one">
              <a href="https://github.com/jrosmith">
                <i class="fa fa-github-square" aria-hidden="true"></i>
              </a>
            </li>

            <li class="fade-in two">
              <a href="https://linkedin.com/in/smithjoshr">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </li>

            <li class="fade-in three">
              <a href="mailto:smithjoshr@gmail.com">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </a>
            </li>
          </ul>`;

  $('.meat-detail').append(contactHTML);
};

const skillClick = () => {
  const skillHTML = `
          <ul class="devicons">
          <li class="fade-in"><i class="devicon-html5-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-css3-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-react-original-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-jquery-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-mocha-plain"></i></li>
          <li class="fade-in"><i class="devicon-javascript-plain"></i></li>
          <li class="fade-in"><i class="devicon-nodejs-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-rails-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-ruby-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-go-plain"></i></li>
          <li class="fade-in"><i class="devicon-git-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-bitbucket-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-mongodb-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-postgresql-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-heroku-plain-wordmark"></i></li>
          <li class="fade-in"><i class="devicon-amazonwebservices-plain-wordmark"></i></li>
          </ul>`;

  $('.meat-detail').append(skillHTML);
};

const aboutClick = () => {
  const aboutHTML = `
  <section class="about-meat">
      <p class="fade-in one">
        I am a software engineer currently working on private, permissioned blockchains.
      </p>
      <br>
      <p class="fade-in two">
        In addition to my work in fintech, I have an extensive
        background in physics, physics education, and physics
        education research. In my spare time I enjoy spoiling my
        bluetick coonhound, shooting pool, and playing music.
      </p>
    </section>`;


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
