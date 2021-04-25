import './index.css'

import { useEffect, useRef, useState } from 'react'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

function Write() {
  const canvasRef = useRef()
  const [n, setN] = useState(1024)
  const [file, setFile] = useState('')
  const [output, setOutput] = useState('')

  useEffect(() => {
    draw(canvasRef.current, n, file, setOutput)
  }, [n, file])

  function handleFileChange(event) {
    setFile(event.nativeEvent.target.files[0])
  }

  return (
    <div className="Write">
      <div className="x4">
        <Typography className="mr-1">
          n:
        </Typography>
        <TextField
          type="number"
          value={n}
          onChange={event => setN(event.currentTarget.value)}
        />
      </div>
      <input
        type="file"
        onChange={handleFileChange}
        className="mt-2"
      />
      <canvas
        ref={canvasRef}
        style={{
          width: n,
          height: n,
        }}
        className="mt-2"

      />
      <textarea
        value={output}
        onChange={event => setOutput(event.currentTarget.value)}
        className="mt-2"
      />
    </div>
  )
}

function draw(canvas, n, file, setOutput) {
  canvas.width = n
  canvas.height = n

  const _ = canvas.getContext('2d')

  _.fillStyle = 'white'
  _.fillRect(0, 0, n, n)

  if (!file) return

  const image = new Image()

  image.onload = () => {
    _.drawImage(image, 0, 0)

    const { data } = _.getImageData(0, 0, n, n)

    let output = ''

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const alpha = data[i + 3]

      if (r === 255 && g === 255 && b === 255) {
        output += '0'
      }
      else {
        output += '1'
      }
    }

    setOutput(output)
  }

  image.src = URL.createObjectURL(file)
}

export default Write
