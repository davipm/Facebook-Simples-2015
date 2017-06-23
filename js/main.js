// function top page
$(document).ready( ($) => {
  let offset = 300, // distancia para o botão aparecer
      offsetOpacity = 1200,
      scrollTopDuration = 500, // tempo da animação
      $backToTop = $('.topPage');

  // logica para adicionar class do botão
  $(window).scroll( () => {
    ($(this).scrollTop() > offset) ? $backToTop.addClass('topPage-visible') :
        $backToTop.removeClass('topPage-visible topPage-fade-out');
    if($(this).scrollTop() > offsetOpacity) {
      $backToTop.addClass('topPage-fade-out');
    }
  });

  // evento do click
  $backToTop.click( (e) => {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
      }, scrollTopDuration);
    });
});
// fim do top page
