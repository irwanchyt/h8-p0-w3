function angkaPalindrome(num){

  //num = num + 1
  while (true){
    num = num + 1
    var numString = num.toString()


    var hasilBalik = ''
    for (var i = numString.length-1 ; i >= 0 ; i--){

          hasilBalik += numString[i]//untuk BalikKata
        //console.log(hasilBalik)

    }
          //console.log(hasilBalik)
    if (numString === hasilBalik){

      return Number(hasilBalik)//ini Palindrome

    }

  }
}
