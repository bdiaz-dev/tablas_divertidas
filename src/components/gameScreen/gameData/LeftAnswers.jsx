import { useGameData } from '../../../context/gameDataContext'

export default function LeftAnswers () {
  const { gameQuestions, correctAnswers } = useGameData()
  return (
    <div>
    {`Te quedan ${gameQuestions.length - correctAnswers.current.length}`}
  </div>
  )
}
