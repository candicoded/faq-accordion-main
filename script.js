$(document).ready(() => {
  $('.question').on('click', event => {
    $(event.currentTarget).next('.answer').toggle();
    $(event.currentTarget).toggleClass('active');
  })
});