function palindrome(kata){
  var hasil= ''

  for( var i = kata.length-1; i>= 0; i--){

   hasil = hasil + kata[i]

    //console.log(i)
  }
    //console.log(hasil)
    //console.log(kata +'='+hasil)
  if (kata===hasil){
    return true
  }else{
    return false
  }

}
//console.log(palindrome('katak')); // true
console.log(palindrome('katak'))
