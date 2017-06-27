function map(collection, callback) {
  const newArray = []
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i]
    newArray.push(callback(element, i, collection));
  }
  return newArray
}

let myLetters = ['a', 'b', 'c']
console.log(map(myLetters, (letter) => letter + letter))

let myNumbers = [1, 2, 3]
let doubledNumbers = map(myNumbers, (number) => number * 2)
console.log(doubledNumbers);

const autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
];

const transformedAutobots = map(autobots, function(autobot) {
  return Object.assign({}, autobot, {strength: autobot.strength * 2, isTransformed: true})
})
console.log(transformedAutobots);
