import { useMemo, useState } from "react"
import ChildOne from "./Components/ChildOne"
import ChildTwo from "./Components/ChildTwo"

function App() {
  const [numberPontOne, setNumberPontOne] = useState(0)
  const [numberPontTwo, setNumberPontTwo] = useState(0)
  const [numberSumOne, setNumberSumOne] = useState(0)
  const [numberSumTwo, setNumberSumTwo] = useState(0)

  const potenciaResult = useMemo(() => {
    const future = Date.now() + 1000
    while (future > Date.now()) { }
    return numberPontOne ** numberPontTwo
  }, [numberPontOne, numberPontTwo])

  let sumResult = numberSumOne + numberSumTwo

  return (
    <div>
      <div>
        <p>{numberPontOne} ^ {numberPontTwo}: {potenciaResult}</p>
        <input type="number" onChange={(event) => setNumberPontOne(parseInt(event.target.value))}></input>
      </div>
      <div>
        <input type="number" onChange={(event) => setNumberPontTwo(parseInt(event.target.value))}></input>
      </div>
      <div>
        <p>{numberSumOne} + {numberSumTwo} : {sumResult}</p>
        <input type="number" onChange={(event) => setNumberSumOne(parseInt(event.target.value))}></input>
      </div>
      <div>
        <input type="number" onChange={(event) => setNumberSumTwo(parseInt(event.target.value))}></input>
      </div>
      <hr />
      <br />
      <ChildOne />
      <ChildTwo />
    </div>
  )
}

export default App
