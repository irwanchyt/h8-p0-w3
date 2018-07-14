function balikString(kata){

 var kataBaru = ''
 var sum = kata.length-1

for ( var i = sum ; i >=0 ; i--){
 kataBaru += kata[i]
 //console.log(kataBaru)

}
//console.log(kataBaru)
return(kataBaru)
}

balikString('Hello World!')
