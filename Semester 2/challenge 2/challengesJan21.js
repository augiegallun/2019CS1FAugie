//Challenge 1
function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));

//Challenge 2
function reverse(message) {
    var reverseString = "";
    for(var i=message.length-1; i>=0; i--){
        reverseString += message.charAt(i);
    }
    return reverseString
}

console.log(reverse("hello"));
console.log(reverse("good"));

//Challenge 3
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

console.log(palindrome("racecar"));
console.log(palindrome("yo"));