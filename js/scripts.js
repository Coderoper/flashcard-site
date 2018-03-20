$(document).ready(function() {
  $(".clickable").click(function(){
    console.log(this);
    $(this).parent().parent().parent().find(".definition").slideToggle();
  });
});
