import React, { useEffect } from 'react'
import { useSelectedTables } from '../context/selectedTablesContext'
import { multiplicationTables } from '../constants/tables'
import shuffleArray from '../logic/shuffle'
import QuestionCard from './gameScreen/QuestionCard'
import Chrono from './gameScreen/chrono/Chrono'
import { useGameData } from '../context/gameDataContext'
import WrongAnswers from './gameScreen/gameData/WrongAnswers'
import { useGameFunctions } from '../hooks/useGameFunctions'
import LeftAnswers from './gameScreen/gameData/LeftAnswers'
import FinalModal from './gameScreen/FinalModal'
import CloseButton from './gameScreen/closeButton/CloseButton'
import CloseModal from './gameScreen/closeButton/CloseModal'

export default function GameScreen () {
  const { selectedTables } = useSelectedTables()
  const { handleOther } = useGameFunctions()
  const {
    gameQuestions,
    setGameQuestions
  } = useGameData()

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
        <LeftAnswers />
        <WrongAnswers />
      </div>
      <div className='questionsContainer'>
        {gameQuestions.length > 0 &&
          gameQuestions.map((item, index) => (
            <QuestionCard
              key={index}
              item={item}
              index={index}
            />
          ))
        }
      </div>
      <button
        onClick={handleOther}
      >
        {'Dame otra! 😬'}
      </button>
      <FinalModal />
      <CloseButton />
      <CloseModal />
    </div>
  )
}
