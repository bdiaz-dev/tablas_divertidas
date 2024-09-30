import { useEffect, useState } from "react"
import shuffleArray from "../../logic/shuffle"

export default function StartEmoji () {
  const [todayText, setTodayText] = useState('')
  const text = [
    '¿Que tal estas hoy?',
    '¿Has practicado ya hoy?',
    'Hace un dia perfecto para jugar con las tablas',
    '¡Que bien verte por aquí!'
  ]
  useEffect(() => {
    const newText = shuffleArray(text)
    setTodayText(newText[0])
  }, [])
  return (
    <div id='startEmoji'>
      <span className="emoji">
        😊
      </span>
      <div className="textBox">
        <span>
          {todayText}
        </span>
      </div>
    </div>
  )
}
