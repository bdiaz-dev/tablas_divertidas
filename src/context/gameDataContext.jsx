import React, { createContext, useContext, useState } from 'react'

// Crear el contexto
const WrongAnswersContext = createContext()

// Proveedor del contexto
export const GameDataContext = ({ children }) => {
  const [wrongAnswers, setWrongAnswers] = useState(null)

  const incrementWrongAnswers = () => {
    setWrongAnswers((prev) => prev + 1)
  }

  return (
    <WrongAnswersContext.Provider value={{ wrongAnswers, incrementWrongAnswers }}>
      {children}
    </WrongAnswersContext.Provider>
  )
}

// Hook personalizado para usar el contexto de wrongAnswers
export const useWrongAnswers = () => {
  return useContext(WrongAnswersContext)
}
