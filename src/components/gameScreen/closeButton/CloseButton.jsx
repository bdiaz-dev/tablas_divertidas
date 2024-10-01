import { useGameData } from '../../../context/gameDataContext'
import { useSelectedTables } from '../../../context/selectedTablesContext'
import { motion } from 'framer-motion'

export default function CloseButton () {
  const { selectedTables } = useSelectedTables()
  const { setIsCloseModal } = useGameData()
  return (
    <>
      {
        selectedTables && (
          <motion.button
            id='closeButton'
            onClick={() => setIsCloseModal(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            X
          </motion.button>
        )
      }
    </>
  )
}
