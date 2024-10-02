import { useEffect, useState } from 'react'
import shuffleArray from '../logic/shuffle'
import { useGameData } from '../context/gameDataContext'
import { faces } from '../constants/gameEmojiFaces.'

export const useGameEmoji = () => {
  const { wrongAnswers, correctAnswers, isFinal } = useGameData()
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
    setAnimation('2')
    if (isFinal) {
      setActualFace(faces.final)
    } else {
      const newRightFace = shuffleArray(faces.right)
      setActualFace(newRightFace[0])
      setTimeout(() => {
        setActualFace(faces.thinking)
        setAnimation(0)
      }, 1500)
    }
  }, [correctAnswers])

  return { actualFace, animation }
}
