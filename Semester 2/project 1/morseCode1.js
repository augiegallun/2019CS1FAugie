function morseCode(message) {
    var morseMessage = "";
    var alphabet = [
        {letter:"a",morse:".-"},
        {letter:"b",morse:"-..."},
        {letter:"c",morse:"-.-."},
        {letter:"d",morse:"-.."},
        {letter:"e",morse:"."},
        {letter:"f",morse:"..-."},
        {letter:"g",morse:"--."},
        {letter:"h",morse:"...."},
        {letter:"i",morse:".."},
        {letter:"j",morse:".---"},
        {letter:"k",morse:"-.-"},
        {letter:"l",morse:".-.."},
        {letter:"m",morse:"--"},
        {letter:"n",morse:"-."},
        {letter:"o",morse:"---"},
        {letter:"p",morse:".--."},
        {letter:"q",morse:"--.-"},
        {letter:"r",morse:".-."},
        {letter:"s",morse:"..."},
        {letter:"t",morse:"-"},
        {letter:"u",morse:"..-"},
        {letter:"v",morse:"...-"},
        {letter:"w",morse:".--"},
        {letter:"x",morse:"-..-"},
        {letter:"y",morse:"-.--"},
        {letter:"z",morse:"--.."},
        {letter:" ",morse:"  "}
    ];

    for(var i=0; i<message.length; i++){
        var currLetter = message.toLowerCase(i).charAt(i);
        var letterIndex = alphabet.findIndex(
            function (letterObject){
                return currLetter == letterObject.letter;
            });
        //console.log(letterIndex);
        morseMessage += alphabet[letterIndex].morse+" ";
    }

    


    return morseMessage;

};


$('#sentenceBox').keyup(
    function(){
        var originalMessage = $('#sentenceBox').text();
        $('#morseCodeBox').text(morseCode(originalMessage))
    });


    
   