import './App.css';

import baseInput from './input'

import { useEffect, useRef, useState } from 'react'

function App() {
  const canvasRef = useRef()
  const [input, setInput] = useState(baseInput)

  useEffect(() => {
    draw(canvasRef.current, input)
  }, [input])

  const n = Math.sqrt(input.length)
  console.log('n', n)

  return (
    <div className="App">
      <textarea
        width="100%"
        height={64}
        value={input}
        onChange={event => setInput(event.currentTarget.value)}
      />

      <canvas
        ref={canvasRef}
        style={{
          width: n,
          height: n,
        }}
      />
    </div>
  );
}

function draw(canvas, nn) {
  const n = Math.sqrt(nn.length)
  canvas.width = n
  canvas.height = n

  const _ = canvas.getContext('2d')

  _.fillStyle = 'white'
  _.fillRect(0, 0, n, n)
  _.fillStyle = 'black'

  for (let i = 0; i < nn.length; i++) {
    const p = nn[i];
    const x = i % n
    const y = Math.floor(i / n)

    if (p === '1') {
      _.fillRect(x, y, 1, 1)
    }
  }
}

export default App;
