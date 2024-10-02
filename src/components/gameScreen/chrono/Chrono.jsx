import React, { useEffect } from 'react'
import { useStopwatch } from 'react-timer-hook'
import { useGameData } from '../../../context/gameDataContext'

export default function Chrono () {
  const { isFinal, setTime } = useGameData()
  const {
    // totalSeconds,
    seconds,
    minutes,
    hours,
    // isRunning,
    // start,
    pause,
    reset
  } = useStopwatch({ autoStart: true })

  useEffect(() => {
    if (isFinal) {
      pause()
      setTime(`
        ${hours.toString().padStart(2, '0')} :
        ${minutes.toString().padStart(2, '0')} :
        ${seconds.toString().padStart(2, '0')}
        `)
      reset()
    }
  }, [isFinal])

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
