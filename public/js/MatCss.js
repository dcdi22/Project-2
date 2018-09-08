$(document).ready(function() {
  $(".carousel").carousel({
    dist: 0,
    padding: 0,
    fullWidth: true
  });
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();

  // function for auto play carousel-slider
  setInterval(function() {
    $(".carousel").carousel("next");
  }, 4000);

  $(".modal").modal();

  Materialize.updateTextFields();

  $("select").material_select();
});
