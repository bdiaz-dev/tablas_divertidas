import { useState } from 'react'
import './App.css'
import { multiplicationTables } from './constants/tables'
import { useSelectedTables } from './context/selectedTablesContext'
import SelectTablesForm from './components/SelectTablesForm'
import Table from './components/Table'
import GameScreen from './components/GameScreen'
import { GameDataContext } from './context/gameDataContext'

function App () {
  const { selectedTables } = useSelectedTables()

  return (
    <>
      <div id='main'>
        {selectedTables.length < 1 && (
          <>
            <h1>Tablas divertidas</h1>
            <h2>Con cuales jugamos hoy?</h2>
            <SelectTablesForm />
            <div>
              {selectedTables.length > 0 && <h3>Tablas seleccionadas: {selectedTables.join(', ')}</h3>}
            </div>
          </>
        )}

        {selectedTables.length > 0 && <div>
          <GameDataContext>
            <GameScreen />
          </GameDataContext>
          {/* <ul>

            {selectedTables.map((el) => (
              <li key={el}>
                <Table table={el} />
              </li>
            ))}
          </ul> */}
          {/* <ul>
            {Object.entries(multiplicationTables)
              .filter(([index]) => selectedTables.includes(Number(index) + 1)) // Filtramos por índice
              .map(([index]) => ( // Desestructuramos para obtener index y solution
                <li key={index}>
                  <h1>Tabla del {Number(index) + 1}</h1>
                  {index.map(([question]) => (
                    <p>{question}</p>
                  ))}
                </li>
              ))}
          </ul> */}
        </div>}

      </div>
    </>
  )
}

export default App
