import { useSelectedTables } from '../context/selectedTablesContext'

export default function useReturn () {
  const { setSelectedTables, setIsFailStart } = useSelectedTables()
  const handleReturn = () => {
    setSelectedTables([])
    setIsFailStart(false)
  }

  return { handleReturn }
}
