function reverseString(word){
  return word.split('').reverse().join('')
}

function isPalindrome(word) {
  // I need to make an isPalindrome function and pass it a string as a parameter. When input string is the same foward and ackward, the function should return true. Else it should retunr false.
  const reversedWord = reverseString(word)
  if (word === reversedWord){
    return true;
  }else{
    return false;
  }
}

/* 
  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log('Expecting: true')
  console.log('=>', isPalindrome('mom'))

  console.log('')

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
