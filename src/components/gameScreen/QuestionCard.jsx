import { AnimatePresence, motion } from 'framer-motion'
import shuffleArray from '../../logic/shuffle'

export default function QuestionCard ({ item, isSelected, trySolution }) {
  return (
    <AnimatePresence>
      {isSelected && (
        <>
          <motion.div
            className='questionCard'
            // initial={{ translateX: (direction > 0) ? '100dvw' : '-100dvw' }}
            initial={{ translateX: '100dvw' }}
            animate={{ translateX: '0' }}
            // exit={{ translateX: (direction > 0) ? '-100dvw' : '100dvw' }}
            exit={{ translateX: '-100dvw' }}
            transition={{ duration: 0.5 }}
          >
            <h3>{item.question}</h3>
            <h2>{'¿Cuanto es?'}</h2>
            <div>
              <ul>
                {shuffleArray([item.correct, ...item.wrong]).map((s, index) => (
                  <li
                    key={`${item.question}-${index}`}
                    onClick={(e) => trySolution(e, { s, correct: item.correct })}
                  >
                    <p>{s}</p>
                    <div className='wrongMark'>
                      <span>X</span>
                    </div>
                    <div className='correctMark'>
                      <span>✔</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
