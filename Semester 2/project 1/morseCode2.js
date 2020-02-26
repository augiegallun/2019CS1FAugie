function decodeMorseCode(message){
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
        {letter:" ", morse:"  "}
    ];

    var block = "";

    for(var i=0; i<message.length; i++){
        var currMorse = message.charAt(i);
        //console.log(i,currMorse);
        if(i < message.length-1 && currMorse !== " "){
            block += currMorse;
            //console.log(block);
        }
        else{
            if(i == message.length-1)
                block += currMorse;  
            //console.log(i, block);
            var morseIndex = alphabet.findIndex(
            function (morseObject){
                //if(currMorse == "  ") 
                return block == morseObject.morse;
            });
            console.log(morseIndex);
            morseMessage += alphabet[morseIndex].letter;
            block = "";
        }
        
        
    }

    return morseMessage;
}

console.log(decodeMorseCode("... --- ..."));

$('#sentenceBox').keyup(
    function(){
        var originalMessage = $('#sentenceBox').text();
        $('#morseCodeBox').text(decodeMorseCode(originalMessage))
    });