import { useGameData } from '../../../context/gameDataContext'

export default function WrongAnswers () {
  const { wrongAnswers } = useGameData()
  return (
    <div>
      {`Errores: ${wrongAnswers}`}
    </div>
  )
}
