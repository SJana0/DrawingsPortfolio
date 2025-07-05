$(document).ready(function(){
  $(".gallery-item").mouseenter(function(){
    var title = $(this).data("title");
    $(this).append("<div class='image-title'>" + title + "</div>");
    $(this).find(".image-title").fadeIn(); 
  }).mouseleave(function(){
    $(this).find(".image-title").fadeOut(); 
  });
});