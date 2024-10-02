// import { useState } from 'react'
import { useSelectedTables } from '../context/selectedTablesContext'
import { motion } from 'framer-motion'

export default function SelectTablesForm () {
  const { setSelectedTables, setIsFailStart } = useSelectedTables()
  // const [checkedTables, setCheckedTables] = useState([])
  const selectTable = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const selected = Array.from(formData.entries())
      .filter(([, value]) => value === 'on')
      .map(([key]) => Number(key))

    if (selected.length === 0) { setIsFailStart(true) }
    setSelectedTables(selected)
    console.log(selected)
  }
  return (
    <form id='selectTablesForm' action="" onSubmit={selectTable}>
      <div>
        <input type="checkbox" name="1" id="1" />
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} htmlFor="1">1</motion.label>

        <input type="checkbox" name="2" id="2" />
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} htmlFor="2">2</motion.label>

        <input type="checkbox" name="3" id="3" />
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} htmlFor="3">3</motion.label>

        <input type="checkbox" name="4" id="4" />
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} htmlFor="4">4</motion.label>

        <input type="checkbox" name="5" id="5" />
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} htmlFor="5">5</motion.label>

        <input type="checkbox" name="6" id="6" />
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} htmlFor="6">6</motion.label>

        <input type="checkbox" name="7" id="7" />
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} htmlFor="7">7</motion.label>

        <input type="checkbox" name="8" id="8" />
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} htmlFor="8">8</motion.label>

        <input type="checkbox" name="9" id="9" />
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} htmlFor="9">9</motion.label>

        <input type="checkbox" name="10" id="10" />
        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} htmlFor="10">10</motion.label>
      </div>

      <button type='submit'>Vamos!</button>
    </form>
  )
}
