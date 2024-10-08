import React, { createContext, useContext, useState } from 'react'

const GameDataContext = createContext()

export const GameDataProvider = ({ children }) => {
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [gameQuestions, setGameQuestions] = useState([])
  const [displayedQuestion, setDisplayedQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [isFinal, setIsFinal] = useState(false)
  const [isCloseModal, setIsCloseModal] = useState(false)
  const [time, setTime] = useState('')

  const incrementWrongAnswers = () => {
    setWrongAnswers((prev) => prev + 1)
  }

  return (
    <GameDataContext.Provider value={{
      wrongAnswers,
      incrementWrongAnswers,
      gameQuestions,
      setGameQuestions,
      displayedQuestion,
      setDisplayedQuestion,
      correctAnswers,
      setCorrectAnswers,
      isFinal,
      setIsFinal,
      isCloseModal,
      setIsCloseModal,
      time,
      setTime
    }}>
      {children}
    </GameDataContext.Provider>
  )
}

export const useGameData = () => {
  return useContext(GameDataContext)
}
