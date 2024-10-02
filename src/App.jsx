import { useSelectedTables } from './context/selectedTablesContext'
import SelectTablesForm from './components/SelectTablesForm'
import GameScreen from './components/GameScreen'
import { GameDataProvider } from './context/gameDataContext'
import StartEmoji from './components/Emoji/StartEmoji'
import GameEmoji from './components/Emoji/GameEmoji'

function App () {
  const { selectedTables } = useSelectedTables()

  return (
    <>
      <div id='main'>

        {
          selectedTables.length < 1 &&
          (
            <>
              <h1>Tablas divertidas</h1>
              <h2>¿Con cuales jugamos hoy?</h2>
              <SelectTablesForm />
              <div>
                {selectedTables.length > 0 && <h3>Tablas seleccionadas: {selectedTables.join(', ')}</h3>}
              </div>
              <StartEmoji />
            </>
          )
        }

        {
          selectedTables.length > 0 &&
          <div>
            <GameDataProvider>
              <GameScreen />
              <GameEmoji />
            </GameDataProvider>
          </div>
        }

      </div>
    </>
  )
}

export default App
