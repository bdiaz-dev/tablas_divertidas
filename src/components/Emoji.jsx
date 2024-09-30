import { useGameData } from '../context/gameDataContext'

export default function Emoji () {
  const { wrongAnswers } = useGameData()
  return (
    <div id='emoji'>
      <span>
        😊
      </span>
    </div>
  )
}
