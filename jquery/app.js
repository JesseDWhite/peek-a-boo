$(document).ready(function () {
  $(".clickable").click(function () {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
  $(".clickableFade").click(function () {
    $(".walrus-fadeOut").fadeToggle();
    $(".walrus-fadeIn").fadeToggle();
  });
})
//   $(".clickable").click(function () {
//     $(".walrus-fadeIn").fadeIn();
//     $(".walrus-fadeIn").fadeOut();
//   });
//   $(".clickable").click(function () {
//     $(".walrus-fadeOut").fadeOut();
//     $(".walrus-fadeOut").fadeIn();
//   });
// });
