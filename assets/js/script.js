$(document).ready(function(){

  // Smooth Scrolling

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

  // Popover

  $(function () {
    $('[data-toggle="popover"]').popover()
  })


});
