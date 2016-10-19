$(document).ready(function(){

  $("#survey form").submit(function(event) {
    var firstInput = $("input#first").val();
    var lastInput = $("input#last").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();


    $(".first").text(firstInput);
    $(".last").text(lastInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
