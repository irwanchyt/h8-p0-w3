function pasanganTerbesar(angka) {
  // you can only write your code here!


  var angkaString = angka.toString()//rubah Angka menjadi string

  var angkaArr = angkaString.split('')//rubah Angka Menjadi String
  //console.log(angkaArr)
  var angkaSort= angkaArr.sort(function(value1,value2){return value2-value1})
  //console.log(angkaSort)
  var angkaTerbesar = angkaSort[0]
  //console.log(angkaTerbesar)
  var angkaArr2 = angkaString.split('')
  //var angkabesar=0;
  for ( var index = 0 ; index < angkaArr2.length ; index++){

    if(angkaTerbesar === angkaArr2[index] ){

      var hasil = (angkaArr2[index])+(angkaArr2[index + 1])
          hasil = Number(hasil)
          //console.log(typeof hasil)
      return hasil
      //if(angkaArr2[index]+ angkaArr2[index + 1] > angkabesar)
    }
  }

 }
// 73
// 74
// 64157374
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
