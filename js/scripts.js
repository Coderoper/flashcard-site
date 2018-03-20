$(document).ready(function() {
  $(".clickable").click(function() {
    $(".javascript-hidden").slideToggle();
    $(".javascript-showing").slideToggle();
    $(".operators-hidden").addClass("initHidden");
  });
  $(".clickable2").click(function() {
    $(".javascript-hidden").slideToggle();
    $(".javascript-showing").slideToggle();
    $(".operators-hidden").removeClass("initHidden");
  });
  $(".clickable3").click(function() {
    $(".operators-hidden").slideToggle();
    $(".operators-showing").slideToggle();
    $(".javascript-hidden").addClass("initHidden");
  });
  $(".clickable4").click(function() {
    $(".operators-hidden").slideToggle();
    $(".operators-showing").slideToggle();
    $(".javascript-hidden").removeClass("initHidden");
  });
});
