$(document).ready(() => {
  $('.question').next('.answer').hide();
  
  $('.question').on('click', event => {
    $(event.currentTarget).next('.answer').toggle();
  })
});