import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const clockWidth = 24
const strokeWidth = 2
const clockHeight = clockWidth - strokeWidth

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(1),
    overflowX: 'scroll',
    display: 'flex',
  },
  stroke: {
    height: strokeWidth,
    width: clockWidth,
    backgroundColor: theme.palette.primary.main,
  },
  ceil: {
    height: clockHeight,
    width: strokeWidth,
  },
}))

function BinaryChart({ data }) {
  const _ = useStyles()

  const binaryData = data
    .map(hex => `0${parseInt(hex, 16).toString(2)}`.split(''))
    .flatMap(x => x)

  return (
    <div
      className={_.root}
    >
      {binaryData.map((b, i) => b === '1' ? (
        <div key={i}>
          <div className={_.stroke} />
          <div className={_.ceil} />
        </div>
      ) : (
        <div key={i}>
          <div className={_.ceil} />
          <div className={_.stroke} />
        </div>
      ))}
    </div>
  )
}

export default BinaryChart
