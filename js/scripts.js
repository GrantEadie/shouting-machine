$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const newText = $("input#userText").val().toUpperCase();
    

    $(".userText").append(newText);
    

    $("#myText").show();

    event.preventDefault();
  });
});