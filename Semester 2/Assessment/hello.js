$("#box1").click(function(){
  $("#bar").css("background-color", "orange");
  $("#bar").text("")
});

$("#box2").click(function(){
  $("#bar").css("background-color", "blue");
  $("#bar").text("")
});

$("#box3").click(function(){
  $("#bar").css("background-color", "red");
  $("#bar").text("3")
});

$("#box4").click(function(){
  $("#bar").css("background-color", "red");
  $("#bar").text("4")
});

$("#box5").click(function(){
  $("#bar").css("background-color", "blue");
  $("#bar").text("5")
  $("#box6").text(Math.floor((Math.random() * 100) + 1))
});

$("#box6").click(function(){
  $("#bar").css("background-color", "orange");
  $("#bar").text("")
});