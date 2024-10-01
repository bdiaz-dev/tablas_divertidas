import { AnimatePresence, motion } from 'framer-motion'
import { useGameData } from '../../context/gameDataContext'
import { useSelectedTables } from '../../context/selectedTablesContext'

export default function FinalModal () {
  const { isFinal } = useGameData()
  const { setSelectedTables } = useSelectedTables()
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
            <h1>Bien hecho!</h1>
            <h2>Has cometido - X - Errores</h2>
            <h2>Has tardado - 00:00 -</h2>
            <button onClick={() => { setSelectedTables([]) }}>Volver al inicio</button>
          </div>
        </motion.div>}
    </AnimatePresence>
  )
}
