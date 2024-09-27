import React, { createContext, useContext, useState } from 'react'

const SelectedTablesContext = createContext()

export const SelectedTablesProvider = ({ children }) => {
  const [selectedTables, setSelectedTables] = useState([])

  return (
    <SelectedTablesContext.Provider value={{ selectedTables, setSelectedTables }}>
      {children}
    </SelectedTablesContext.Provider>
  )
}

export const useSelectedTables = () => {
  return useContext(SelectedTablesContext)
}
