import { useEffect, useState } from 'react'
import shuffleArray from '../../logic/shuffle'
import { text } from '../../constants/startEmojiText'

export default function StartEmoji () {
  const [todayText, setTodayText] = useState('')

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
