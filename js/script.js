
console.log("hey");

$(function() {
  // jQuery goes here...
console.log("hi");
  // Uncomment this line to fade out the red box on page load
  $(".red-box").fadeOut(2000);
    $(".green-box").fadeOut(2000);
    $(".red-box").fadeIn(2000);
    $(".red-box").fadeTo(1000,0.5);
});