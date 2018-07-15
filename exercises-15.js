function groupAnimals(animals) {
  var sortAnimal=animals.sort();
  var tampung=[];
  var tampung2=[];
  for (var i = 0; i < sortAnimal.length; i++) {
    if (i !== sortAnimal.length -1 && sortAnimal[i][0]===sortAnimal[i+1][0] ) {
      tampung.push(sortAnimal[i])
    }
    else  {
      tampung.push(sortAnimal[i])
      tampung2.push(tampung)
      tampung=[]
     }
  }
  return tampung2;
}


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
