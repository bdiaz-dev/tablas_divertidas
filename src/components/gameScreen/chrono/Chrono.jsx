import React from 'react'
import { useStopwatch } from 'react-timer-hook'

export default function Chrono () {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: true })

  return (
    <div id='chrono' style={{ textAlign: 'center' }}>
      <span>{hours.toString().padStart(2, '0')}</span>
      :<span>{minutes.toString().padStart(2, '0')}</span>
      :<span>{seconds.toString().padStart(2, '0')}</span>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  )
}
