function tentukanDeretAritmatika(angka) {
  
  var selisih  = angka[1] - angka[0]
  //console.log(selisih)
  var panjang  = angka.length
 // console.log(panjang)
  var akhir = angka[angka.length-1]
    //console.log(akhirArr)

  var i = 0

      var tampung = akhir
   while ( i < panjang){

           tampung = tampung - selisih

         i++
   }
    if (tampung === 0){
        return true
        }else{
        return  false
        }

}
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
