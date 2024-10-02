import { useGameData } from '../context/gameDataContext'

export const useGameFunctions = () => {
  const {
    gameQuestions,
    displayedQuestion,
    setDisplayedQuestion,
    incrementWrongAnswers,
    correctAnswers,
    setCorrectAnswers,
    setIsFinal
  } = useGameData()

  const handleOther = () => {
    const randomIndex = Math.floor(Math.random() * gameQuestions.length)
    if (randomIndex !== displayedQuestion && !correctAnswers.includes(randomIndex)) {
      setDisplayedQuestion(randomIndex)
    } else {
      handleOther(correctAnswers)
    }
  }

  const trySolution = (e, { s, correct }) => {
    if (s === correct) {
      e.currentTarget.setAttribute('correct', true)
      const newCorrectArray = [...correctAnswers, displayedQuestion]
      setCorrectAnswers(newCorrectArray)
      if (gameQuestions.length === newCorrectArray.length) {
        setIsFinal(true)
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
