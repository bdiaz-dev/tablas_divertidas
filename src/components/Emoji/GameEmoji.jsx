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
  const [animation, setAnimation] = useState('0')

  useEffect(() => {
    if (!wrongAnswers) return
    const newWrongFace = shuffleArray(faces.wrong)
    setActualFace(newWrongFace[0])
    setAnimation('1')
    setTimeout(() => {
      setActualFace(faces.thinking)
      setAnimation(0)
    }, 1500)
  }, [wrongAnswers])

  useEffect(() => {
    if (!correctAnswers) return
    const newRightFace = shuffleArray(faces.right)
    setActualFace(newRightFace[0])
    setAnimation('2')
    setTimeout(() => {
      setActualFace(faces.thinking)
      setAnimation(0)
    }, 1500)
  }, [correctAnswers])

  return (
    <div id='gameEmoji'>
      <span className="emoji" data-animation={animation}>
        {actualFace}
      </span>
    </div>
  )
}
