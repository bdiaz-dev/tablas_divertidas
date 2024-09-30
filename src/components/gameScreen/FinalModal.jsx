import { AnimatePresence, motion } from 'framer-motion'
import { useGameData } from '../../context/gameDataContext'

export default function FinalModal () {
  const { isFinal } = useGameData()
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
            <h2>Bien hecho!</h2>
            <p>Has cometido X Errores</p>
            <p>Has tardado 00:00</p>
            <button>Repetir</button>
            <button>Volver al inicio</button>
          </div>
        </motion.div>}
    </AnimatePresence>
  )
}
