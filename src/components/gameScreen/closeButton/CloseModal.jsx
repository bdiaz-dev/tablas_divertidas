import { useGameData } from '../../../context/gameDataContext'
// import { useSelectedTables } from '../../../context/selectedTablesContext'
import useReturn from '../../../hooks/useReturn'

export default function CloseModal () {
  const { isCloseModal, setIsCloseModal } = useGameData()
  // const { setSelectedTables } = useSelectedTables()
  const { handleReturn } = useReturn()
  const handleClose = () => {
    handleReturn()
    setIsCloseModal(false)
  }
  const handleCancel = () => {
    setIsCloseModal(false)
  }
  return (
    <>
      {
        isCloseModal && (
          <div id='closeModalContainer'>
            <div className='closeModal'>
              <h1>¿Quieres salir del juego?</h1>
              <div>
                <button onClick={handleClose}>SI</button>
                <button onClick={handleCancel}>NO</button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
