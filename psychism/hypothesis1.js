const nWords = 2048

// const wordSizesVariable = [
//   2,
//   4,
//   8,
//   16,
//   32,
// ]

const wordSizesVariablePatrons = [
  2,
  4,
  8,
  16,
  32,
]

const wordSizesVariable = []

wordSizesVariablePatrons.forEach(x => {
  for (let i = 0; i < 2 ** x; i++) {
    wordSizesVariable.push(x)
  }
})

const wordSizeFixed = 32
const stopSize = 1

// const picked = {
//   2: 0,
//   4: 0,
//   8: 0,
//   16: 0,
//   32: 0,
// }

console.log('wordSizesVariable', wordSizesVariable)

const nIterations = 2048

let sumVariable = 0
let sumFixed = 0

for (let i = 0; i < nIterations; i++) {
  let nBitsVariable = 0
  let nBitsFixed = 0

  for (let w = 0; w < nWords; w++) {
    const wordSize = pickRandom(wordSizesVariable) + stopSize

    // picked[wordSize]++

    nBitsVariable += wordSize
    nBitsFixed += wordSizeFixed
  }

  sumVariable += nBitsVariable
  sumFixed += nBitsFixed
}

const averageVariable = sumVariable / nIterations
const averageFixed = sumFixed / nIterations

console.log(averageVariable, averageFixed, averageVariable / averageFixed)

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}
