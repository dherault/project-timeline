const fs = require('fs')
const path = require('path')

function generateRandom1nn(n = 1024) {
  let x = ''

  for (let i = 0; i < n * n; i++) {
    x = x.concat(Math.random() > 0.5 ? 1 : 0)
  }

  fs.writeFileSync(path.join(__dirname, '../random'), x)
}

generateRandom1nn()
