import { useWrongAnswers } from '../../../context/gameDataContext'

export default function WrongAnswers () {
  const { wrongAnswers } = useWrongAnswers()
  return (
    <div>
    {`Errores: ${wrongAnswers}`}
  </div>
  )
}
