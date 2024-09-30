import { useEffect, useState } from 'react'
import { useGameData } from '../../context/gameDataContext'
import shuffleArray from '../../logic/shuffle'

export default function GameEmoji () {
  const { wrongAnswers, correctAnswers } = useGameData()
  const faces = {
    thinking: '🤔',
    wrong: ['😓', '😖', '😯', '🤯'],
    right: ['😎', '🤩', '😁', '😃']
  }
  const [actualFace, setActualFace] = useState(faces.thinking)

  useEffect(() => {
    if (!wrongAnswers) return
    const newWrongFace = shuffleArray(faces.wrong)
    setActualFace(newWrongFace[0])
    setTimeout(() => { setActualFace(faces.thinking) }, 1500)
  }, [wrongAnswers])

  useEffect(() => {
    if (!correctAnswers.current) return
    const newRightFace = shuffleArray(faces.right)
    setActualFace(newRightFace[0])
    setTimeout(() => { setActualFace(faces.thinking) }, 1500)
  }, [correctAnswers.current])

  return (
    <div id='gameEmoji'>
      <span className="emoji">
        {actualFace}
      </span>
    </div>
  )
}
