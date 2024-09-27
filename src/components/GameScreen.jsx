import React, { useEffect, useState } from 'react'
import { useSelectedTables } from '../context/selectedTablesContext'
import { multiplicationTables } from '../constants/tables'
import { p, ul } from 'framer-motion/client'

const GameScreen = () => {
  const { selectedTables } = useSelectedTables()
  const [displayedQuestions, setDisplayedQuestions] = useState([])
  const [displayedSolutions, setDisplayedSolutions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState()

  const trySolution = () => {

  }

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    const selectedQuestions = selectedTables.flatMap((tableIndex) => {
      const table = multiplicationTables[tableIndex]
      if (table) {
        return table
      }
      return []
    })
    console.log(selectedQuestions)

    setDisplayedQuestions(shuffleArray(selectedQuestions))
  }, [selectedTables])

  return (
    <div>
      <h2>Preguntas</h2>
      {displayedQuestions.map((item, index) => (
        <div key={index}>
          <p onClick={() => setSelectedQuestion(item)}>{item.question}</p>
          <div>
            {selectedQuestion === item &&
              <ul>
                {shuffleArray([item.correct, ...item.wrong]).map((q) => (
                  <li>
                    <p>{q}</p>
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default GameScreen
