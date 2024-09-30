import React, { createContext, useContext, useRef, useState } from 'react'

// Crear el contexto
const GameDataContext = createContext()

// Proveedor del contexto
export const GameDataProvider = ({ children }) => {
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [gameQuestions, setGameQuestions] = useState([])
  const [displayedQuestion, setDisplayedQuestion] = useState(0)
  const correctAnswers = useRef([])

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
      correctAnswers
    }}>
      {children}
    </GameDataContext.Provider>
  )
}

// Hook personalizado para usar el contexto de wrongAnswers
export const useGameData = () => {
  return useContext(GameDataContext)
}
