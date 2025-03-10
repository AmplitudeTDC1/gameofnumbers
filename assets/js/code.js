$(document).ready(function () {
  $(".sidebar-form .call-action").click(function () {
    $(this).parents(".sidebar-form").toggleClass("show");
  });
});

$(document).ready(function () {
  // Add event listener to the signup button
  $(".signup-btn").click(function () {
    // Toggle the visibility of the sidebar form
    $(".sidebar-form").toggleClass("show");
  });
});
