var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]


function dataHandling2 (){
      input.splice(1,1,'Roman Alamsyah Elsyarawi')
      input.splice(2,1,'Provinsi Bandar Lampung')
      input.splice(4,1,'Pria','SMA Internasional Metro')
        console.log(input)

    var angka = input[3]

    var angka1= angka.split('/')
    // console.log(angka1[1])
    var bulan = angka1[1]

    var bulan2= bulan.toString()
        //console.log(bulan2)
    var bulan3= Number(bulan2)
        //console.log(bulan3)


    var nama  = bulan3
    switch(nama){
      case 1 :   {console.log('Januari'); break; }
      case 2 :   {console.log('Februari'); break; }
      case 3 :   {console.log('Maret'); break; }
      case 4 :   {console.log('April'); break; }
      case 5 :   {console.log('Mei'); break; }
      case 6 :   {console.log('Juni'); break; }
      case 7 :   {console.log('Juli'); break; }
      case 8 :   {console.log('Agustus'); break; }
      case 9 :   {console.log('September'); break; }
      case 10:   {console.log('Oktober'); break; }
      case 11:   {console.log('November'); break; }
      case 12:   {console.log('Desember'); break; }
      default:   {console.log('bukan angka bulan'); }
    }

    var kata = input[3].split('/')
          //console.log(kata)
    var kata2= kata.sort(function(value1,value2){return value2-value1})
            console.log(kata2)

    var kalimat = input[3].split('/')
      // console.log(kalimat)
    var kalimat2= kalimat.join('-')
        console.log(kalimat2)
    var nama = input[1].split('')
    //console.log(nama)
    var nama1= nama.slice(0,14)
    //console.log(nama1)
    var nama2= nama1.join('')
        console.log(nama2)
  return
}

dataHandling2()
