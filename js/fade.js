  $(document).ready(function() {
    $('.h1fade').fadeIn(4000); 
    $('.pfade').fadeIn(5000);
    $('body').fadeIn(2000); 

    function pulsate() {
      $('h1').animate({ opacity: 0.4 }, 600)
             .animate({ opacity: 1.0 }, 800, pulsate);
    }
    pulsate();
  });
  
