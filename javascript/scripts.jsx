import React from 'react';
import ReactDOM from 'react-dom';
import Root from './react_components/root';

const toggleShow = ($el) => {
  $('.show').addClass('hide');
  $('.show').removeClass('show');

  $el.removeClass('hide');
  $el.addClass('show');
};

const clearDetail = ($el) => {

};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const clickHandler = (e) => {
    console.log(e.currentTarget);
    let $el = $(e.target);

    if ($el.hasClass("hide")) {
      toggleShow($el);
    }
  };

  $('.meat-links').click("li", clickHandler);

  ReactDOM.render(<Root />,root);
});
