const marvel_heroes = ['thor','spiderman','venom','Ironman']
const dc_heroes = ['superman','flash','batman']

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes);

//const allheroes = marvel_heroes.concat(dc_heroes)
//console.log(allheroes);

const allnew_heroes = [...marvel_heroes,...dc_heroes]

console.log(allnew_heroes);

const another_aaray = [1,2,34,5, [3,4,4,85] ,[2,33,45,56,[1,2,3]]]
const real_another_array = another_aaray.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Jasprit"))
console.log(Array.from("Jasprit"))
console.log(Array.from({name:"Jasprit"}))

let score1 = 122
let score2 = 1278
let score3 = 166

console.log(Array.of(score1,score2,score3))