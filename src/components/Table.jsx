import { multiplicationTables } from "../constants/tables"

export default function Table ({ table }) {
  console.log(multiplicationTables[table])
  return (
    <>
      <div>
        {multiplicationTables[table].map((el) => (
          <p key={el.question}>{el.question}</p>
        ))}
      </div>
    </>
  )
}
