function targetTerdekat(arr) {
  var posisiX = []
  var posisiO = []

  for( var i = 0 ; i < arr.length; i++){
      if(arr[i] === 'x'){
        posisiX.push(i)

      } else if (arr[i] === 'o' ) {
        posisiO.push(i)
      }
   }
      if (posisiX.length === 0){
          return 0
      }

  var hasil = posisiX[0] - posisiO[0]
      hasil = Math.abs(hasil)


      for (var j = 1 ; j < posisiX.length ; j++){

            //console.log(j)
           if(hasil > posisiX[j] - posisiO[0]){
              hasil = posisiX[j] - posisiO[0]
              hasil = Math.abs(hasil)

              }
        }


  return hasil

}
// TEST CASES
 console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
 console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
 console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
