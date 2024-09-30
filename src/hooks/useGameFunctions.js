import { useGameData } from '../context/gameDataContext'

export const useGameFunctions = () => {
  const {
    gameQuestions,
    displayedQuestion,
    setDisplayedQuestion,
    incrementWrongAnswers,
    correctAnswers
  } = useGameData()

  const handleOther = () => {
    const randomIndex = Math.floor(Math.random() * gameQuestions.length)
    if (randomIndex !== displayedQuestion && !correctAnswers.current.includes(randomIndex)) {
      setDisplayedQuestion(randomIndex)
    } else {
      handleOther(correctAnswers)
    }
  }

  const trySolution = (e, { s, correct }) => {
    console.log(s)
    if (s === correct) {
      e.currentTarget.setAttribute('correct', true)
      const newCorrectArray = [...correctAnswers.current, displayedQuestion]
      correctAnswers.current = newCorrectArray
      console.log(newCorrectArray)
      if (gameQuestions.length === newCorrectArray.length) {
        console.log('winner!!!')
      } else {
        setTimeout(() => handleOther(correctAnswers), 1000)
      }
    } else {
      e.currentTarget.setAttribute('wrong', true)
      incrementWrongAnswers()
    }
  }
  return { handleOther, trySolution }
}
