import React, { createContext, useContext, useState } from 'react'

const SelectedTablesContext = createContext()

export const SelectedTablesProvider = ({ children }) => {
  const [selectedTables, setSelectedTables] = useState([])
  const [isFailStart, setIsFailStart] = useState(false)

  return (
    <SelectedTablesContext.Provider value={{
      selectedTables,
      setSelectedTables,
      isFailStart,
      setIsFailStart
    }}>
      {children}
    </SelectedTablesContext.Provider>
  )
}

export const useSelectedTables = () => {
  return useContext(SelectedTablesContext)
}
