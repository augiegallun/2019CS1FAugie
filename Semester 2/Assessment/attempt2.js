$('.box').click(
    function(){
        var daColor = $(this).css('background-color');
        $('#bar').css('background-color', daColor);
        $('#bar').text("");
});

$('.color3').click(
    function(){
        var daColor = $(this).css('background-color');
        $('#bar').css('background-color', daColor);
        var texto = $(this).text();
        $('#bar').text(texto);
    }
);

$("#box5").click(function(){
  $("#box6").text(Math.floor((Math.random() * 100) + 1))
});


for(var r=0; r<12; r++)
        for(var c=0; c<12; c++){
            var color = (r+c)%2===0?' green': ' white';
            $('#biigBox').append("<div class='lilBoxes " + color + "'></div>");
            console.log("yo")
        }
