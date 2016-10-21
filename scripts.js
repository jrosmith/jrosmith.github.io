const clickHandler = () => {
  alert("clickHandler working");
};

$('.meat-links').on('click', 'li', clickHandler);
