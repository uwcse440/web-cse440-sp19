$(document).ready(function(){
  $(".hypebox_trans").click(function() {
    var random_deg = Math.floor(Math.random() * 360);
    var hue = "hue-rotate(" + random_deg + "deg)";
    $(".hypebox_trans").css("filter", hue);
  });
});