import React, { useEffect, useRef, useState } from 'react'
import { useSelectedTables } from '../context/selectedTablesContext'
import { multiplicationTables } from '../constants/tables'
import shuffleArray from '../logic/shuffle'
import QuestionCard from './gameScreen/QuestionCard'
import Chrono from './gameScreen/chrono/Chrono'
import { useWrongAnswers } from '../context/gameDataContext'
import WrongAnswers from './gameScreen/gameData/wrongAnswers'

const GameScreen = () => {
  const { selectedTables } = useSelectedTables()
  const [gameQuestions, setGameQuestions] = useState([])
  const [displayedQuestion, setDisplayedQuestion] = useState(0)
  const correctAnswers = useRef([])
  const { incrementWrongAnswers } = useWrongAnswers()

  const handleOther = () => {
    const randomIndex = Math.floor(Math.random() * gameQuestions.length)
    if (randomIndex !== displayedQuestion && !correctAnswers.current.includes(randomIndex)) {
      setDisplayedQuestion(randomIndex)
    } else {
      handleOther()
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
        setTimeout(handleOther, 1000)
      }
    } else {
      e.currentTarget.setAttribute('wrong', true)
      incrementWrongAnswers()
    }
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

    setGameQuestions(shuffleArray(selectedQuestions))
    console.log(gameQuestions)
  }, [selectedTables])

  return (
    <div id='gameScreen'>
      <div className='gameData'>
        <Chrono />
        <div>
          {`Te quedan ${gameQuestions.length - correctAnswers.current.length}`}
        </div>
        <WrongAnswers />
      </div>
      <div className='questionsContainer'>
        {gameQuestions.length > 0 &&
          gameQuestions.map((item, index) => (
            <QuestionCard
              key={index}
              item={item}
              isSelected={index === displayedQuestion}
              trySolution={trySolution}
            />
          ))
        }
      </div>
      <button
        onClick={handleOther}
      >
        {'Dame otra!'}
      </button>

    </div>
  )
}

export default GameScreen
