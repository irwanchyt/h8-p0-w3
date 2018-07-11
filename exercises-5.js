function palindrome(kata){
//console.log(kata[0])
//console.log(kata[kata.length-1])
  var char1 = kata[0]
      //console.log(char1)
  var char2 = kata[kata.length-1]
    //console.log(char2)
      if( char1 === char2){
        return true
       }else{
        return false
       }
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
