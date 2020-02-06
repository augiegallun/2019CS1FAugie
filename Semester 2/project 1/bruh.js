
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
        {letter:"z",morse:"--.."}
    ];

    for(var i=0; i<message.length; i++){
        alphabet.message(i)
        

    }
    


    return morseMessage;

};

console.log(morseCode("Hello"));


function checkLetter(alphabet) {

}
    //var needle = alphabet.findIndex(letterObject)
    //return letterObject.letter == needle;

//function myFunction() {
    //alphabet[needle].morse;
//}

//console.log(morseCode(message));
//message = "a"
   
 //for(var i=0; i<message.length; i++){
        //alphabet.charAt(i)
    //}
    //return string
    
//}
//console.log(morseCode("hello bro"));

/*$(document).keydown(function(event) { 

});*/
/*var alphabet = {
        "a" : ".-",
        "b" : "-...",
        "c" : "-.-.",
        "d" : "-..",
        "e" : ".",
        "f" : "..-.",
        "g" : "--.",
        "h" : "....",
        "i" : "..",
        "j" : ".---",
        "k" : "-.-",
        "l" : ".-..",
        "m" : "--",
        "n" : "-.",
        "o" : "---",
        "p" : ".--.",
        "q" : "--.-",
        "r" : ".-.",
        "s" : "...",
        "t" : "-",
        "u" : "..-",
        "v" : "...-",
        "w" : ".--",
        "x" : "-..-",
        "y" : "-.--",
        "z" : "--..",
        " " : "/",
    };*/