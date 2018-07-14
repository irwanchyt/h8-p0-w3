function perkalianUnik(angka) {
  // you can only write your code here!

  var hasilPerkalianUnik = []
  //[24, 12, 8]


  for ( var i = 0 ; i < angka.length ; i++){


      var tampung = 1

      for (var j = 0 ; j < angka.length ; j++){

          //tampung +=  angka[j] + ' * '
        if (i === j){


        }else{
          tampung *=  angka[j]
        }

        //mau kondistionalkan

      }
      hasilPerkalianUnik.push(tampung)
      // console.log(hasilPerkalianUnik)
    }
      return hasilPerkalianUnik
}


console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
