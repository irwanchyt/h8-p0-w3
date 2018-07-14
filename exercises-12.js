function tentukanDeretGeometri(angka) {
//   // you can only write your code here!

  var selisih  = angka[1]/angka[0]
  //console.log(selisih)
  var panjang  = angka.length
 // console.log(panjang)
  var akhir = angka[angka.length-1]
    //console.log(akhirArr)

  var i = 0

      var tampung = akhir
   while ( i < panjang-1){

           tampung = tampung/selisih

         i++
   }
    if (tampung === angka[0]){
      return true
        }else{
        return false
        }

}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
