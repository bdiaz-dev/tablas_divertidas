import { AnimatePresence, motion } from 'framer-motion'
import shuffleArray from '../../logic/shuffle'
import { useGameFunctions } from '../../hooks/useGameFunctions'
import { useGameData } from '../../context/gameDataContext'
import { useEffect, useState } from 'react'
import Answer from './questionCardComponents/Answer'

export default function QuestionCard ({ item, index }) {
  const { trySolution } = useGameFunctions()
  const { displayedQuestion } = useGameData()
  const isSelected = displayedQuestion === index
  const [shuffledAnswers, setShuffledAnswers] = useState([])

  useEffect(() => {
    setShuffledAnswers(shuffleArray([item.correct, ...item.wrong]))
  }, [item])

  return (
    <AnimatePresence>
      {isSelected && (
        <>
          <motion.div
            className='questionCard'
            initial={{ translateX: '100dvw' }}
            animate={{ translateX: '0' }}
            exit={{ translateX: '-100dvw' }}
            transition={{ duration: 0.5 }}
          >
            <h3>{item.question}</h3>
            <h2>{'¿Cuanto es?'}</h2>
            <div>
              <ul>
                {shuffledAnswers.map((s, index) => (
                  <Answer
                  key={`${item.question}-${index}`}
                    s={s}
                    handleClick={(e) => trySolution(e, { s, correct: item.correct })}
                  />
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
