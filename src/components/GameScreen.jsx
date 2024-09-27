import React, { useEffect, useState } from 'react'
import { useSelectedTables } from '../context/selectedTablesContext'
import { multiplicationTables } from '../constants/tables'

const GameScreen = () => {
  const { selectedTables } = useSelectedTables()
  const [displayedQuestions, setDisplayedQuestions] = useState([])

  useEffect(() => {
    const selectedQuestions = selectedTables.flatMap((tableIndex) => {
      const table = multiplicationTables[tableIndex]
      if (table) {
        return table
      }
      return []
    })
    console.log(selectedQuestions)

    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5)
    }
    setDisplayedQuestions(shuffleArray(selectedQuestions))
  }, [selectedTables])

  return (
    <div>
      <h2>Preguntas</h2>
      {displayedQuestions.map((item, index) => (
        <div key={index}>
          <p>{item.question}</p>
        </div>
      ))}
    </div>
  )
}

export default GameScreen
