import React from 'react'
import './App.css'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import BinaryChart from './components/BinaryChart'

function App() {
  const data = createFakeData()

  console.log('data', data)

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1">
        Visualizer
      </Typography>
      <Box mt={4}>
        <BinaryChart data={data} />
      </Box>
    </Container>
  )
}

function createFakeData(nWords = 512) {
  const nBits = 32
  const words = []

  for (let i = 0; i < nWords; i++) {
    let word = ''

    for (let j = 0; j < nBits; j++) {
      word += Math.random() > 0.5 ? 1 : 0
    }

    words.push(parseInt(word, 2).toString(16))
  }

  return words
}

export default App
