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

    var b = 0;
    var e = 0;

    while(e < message.length){
        //console.log(e)
        var currMorse = message.charAt(e); 
        //console.log(currMorse)
        if(currMorse !== " " && e < message.length-1){
            e++;
            console.log(e)
            
            //this is for last "block"
            /*if(e == message.length-1){
                block += message.substring(b,e+1);
                var morseIndex = alphabet.findIndex(
                    function (morseObject){
                        return block == morseObject.morse;
                    });
            //console.log(morseIndex);
            
            morseMessage += alphabet[morseIndex].letter;
            block = "";
            b = e; 
            };
*/

        }
        else{
            if(e == message.length-1){
                e++;
                console.log(e)
            }
            block += message.substring(b,e);
            console.log(block)
            var morseIndex = alphabet.findIndex(
            function (morseObject){
                return block == morseObject.morse;
            });
            //console.log(morseIndex);
            
            morseMessage += alphabet[morseIndex].letter;
            block = "";
            b = e; 
            
            while(currMorse == " " && b < message.length){
                b++;
                currMorse = message.charAt(b);
                //console.log(b,e)
                //console.log(block)
                block = "";
            }
            e = b;
        }
    }
    return morseMessage;
}

console.log(decodeMorseCode("...  --- ..."));

$('#sentenceBox').keyup(
    function(){
        var originalMessage = $('#sentenceBox').text();
        $('#morseCodeBox').text(decodeMorseCode(originalMessage))
    });
    