$(document).ready(() => {
  $('.intro h1').attr('data-original', function () {
      return (this.textContent || this.innerText).trim();
  }).hover(function () {
      $(this).fadeOut(200, function () {
          $(this).html($(this).attr('data-replace')).fadeIn();
      });
  },
  function () {
      $(this).fadeOut(200, function () {
          $(this).html($(this).attr('data-original')).fadeIn();
      });
  });
});