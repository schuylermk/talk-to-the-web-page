$(document).ready(function() {
  $(".panel-body").click(function(){
    $(".hello-shown", this).toggle();
    $(".hello-hidden", this).toggle();
  });

  $(".panel-body").click(function() {
    $(".goodbye-shown", this).toggle();
    $(".goodbye-hidden", this).toggle();
  });  
});
