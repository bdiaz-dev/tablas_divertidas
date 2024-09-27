import { useSelectedTables } from '../context/selectedTablesContext'

export default function SelectTablesForm () {
  const { selectedTables, setSelectedTables } = useSelectedTables()
  const selectTable = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const selected = Array.from(formData.entries())
      .filter(([, value]) => value === 'on')
      .map(([key]) => Number(key))

    setSelectedTables(selected)
    console.log(selected)
  }
  return (
    <form action="" onSubmit={selectTable}>
      <input type="checkbox" name="1" id="1" />
      <label htmlFor="1">1</label>

      <input type="checkbox" name="2" id="2" />
      <label htmlFor="2">2</label>

      <input type="checkbox" name="3" id="3" />
      <label htmlFor="3">3</label>

      <input type="checkbox" name="4" id="4" />
      <label htmlFor="4">4</label>

      <input type="checkbox" name="5" id="5" />
      <label htmlFor="5">5</label>

      <input type="checkbox" name="6" id="6" />
      <label htmlFor="6">6</label>

      <input type="checkbox" name="7" id="7" />
      <label htmlFor="7">7</label>

      <input type="checkbox" name="8" id="8" />
      <label htmlFor="8">8</label>

      <input type="checkbox" name="9" id="9" />
      <label htmlFor="9">9</label>

      <input type="checkbox" name="10" id="10" />
      <label htmlFor="10">10</label>

      <button type='submit'>Vamos!</button>
    </form>
  )
}
