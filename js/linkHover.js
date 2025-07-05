$(document).ready(function(){
    $("nav ul li a").hover(
      function() {
        $(this).css("transform", "scale(1.15)");
      }, 
      function() {
        $(this).css("transform", "scale(1)");
      }
    );
  });