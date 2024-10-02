import { AnimatePresence, motion } from 'framer-motion'
import { useGameData } from '../../context/gameDataContext'
import { useSelectedTables } from '../../context/selectedTablesContext'
import { useFinalText } from '../../hooks/useFinalText'

export default function FinalModal () {
  const { isFinal, time } = useGameData()
  const { setSelectedTables } = useSelectedTables()
  const { title, errorsText } = useFinalText()
  return (
    <AnimatePresence>
      {isFinal &&
        <motion.div
          id='finalModalContainer'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <div className='finalModal'>
            <h1>{title}</h1>
            { errorsText }
            <h2>
              <span>Has tardado </span>
              <span className='finalTime'>{time}</span>
              {/* {`Has tardado - ${time} -`} */}
            </h2>
            <button onClick={() => { setSelectedTables([]) }}>Volver al inicio</button>
          </div>
        </motion.div>}
    </AnimatePresence>
  )
}
