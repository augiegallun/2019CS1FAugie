function noVowels(message) {
    var vowels = 'aeiou';
    var string = "";
    for(var i=0; i<message.length; i++){
        var currentletter = message.charAt(i);
        if(currentletter.indexOf(vowels) == -1){
            return message += string
        }
    }
}

message = "Hello, how are you?";
console.log(noVowels(message));

//if(message.indexOf(vowels) == -1){
      //  return message;
   // }