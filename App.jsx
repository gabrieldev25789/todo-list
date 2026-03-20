import { useRef, useState } from "react"

function App() {

  const [tarefa, setTarefa] = useState([])
  const [valor, setValor] = useState("")

  const inputRef = useRef(null)

  function enviarTarefa(){
    setTarefa([...tarefa, valor])

    console.log(tarefa)
    setValor("")
    inputRef.current.focus()
  }

  return (
    <>
      <input 
      type="text" 
      placeholder="adicione tarefa"
      value={valor}
      ref={inputRef}
      onChange={(e)=> setValor(e.target.value)}/>

      <button onClick={enviarTarefa}>Adicionar tarefa</button>
       
      {tarefa.map((tarefa, index) =>{
        return (
        <ul>
            <li key={index}>{tarefa}</li>
        </ul>
        )
      })}
    </>
  )
}

export default App
