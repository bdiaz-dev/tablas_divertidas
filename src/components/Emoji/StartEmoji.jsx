import { useEffect, useState } from 'react'
import shuffleArray from '../../logic/shuffle'
import { text } from '../../constants/startEmojiText'
import { useSelectedTables } from '../../context/selectedTablesContext'

export default function StartEmoji () {
  const [todayText, setTodayText] = useState('')
  const { selectedTables, isFailStart, setIsFailStart } = useSelectedTables()

  useEffect(() => {
    setIsFailStart(false)
    const newText = shuffleArray(text)
    setTodayText(newText[0])
  }, [])

  useEffect(() => {
    if (selectedTables.length === 0 && isFailStart) {
      document.getElementsByClassName('textBox')[0].style.display = 'block'
      setTodayText('Selecciona al menos una para empezar')
    }
  }, [selectedTables])

  return (
    <div id='startEmoji'>
      <span className="emoji">
        {!isFailStart ? '😊' : '🤓'}
      </span>
      <div className="textBox" onClick={(e) => { e.currentTarget.style.display = 'none' }}>
        <span>
          {todayText}
        </span>
      </div>
    </div>
  )
}
