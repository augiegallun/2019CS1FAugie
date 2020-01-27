function noVowels(message) {
    var vowels = 'aeiou';
    var string = "";
    for(var i=0; i<message.length; i++){
        var currentletter = message.charAt(i);
        if(vowels.indexOf(currentletter)<0)
            string += currentletter; 
        }
    return string
    }
    


message = "Hello, how are you?";
console.log(noVowels(message)); 

function everyOther(message,n){
    var string = "";

    for(var i=0; i<message.length; i+=n){
        var fourthLetter = message.charAt(i);
        string += fourthLetter;
    }
    return string
}

message = "what it do"
console.log(everyOther(message, 3));
