import { useState } from "react"

function App() {

  const [tarefa, setTarefa] = useState([])
  const [valor, setValor] = useState("")

  function enviarTarefa(){
    setTarefa([...tarefa, valor])

    console.log(tarefa)
  }

  return (
    <>
      <input 
      type="text" 
      placeholder="adicione tarefa"
      value={valor}
      onChange={(e)=> setValor(e.target.value)}/>

      <button onClick={enviarTarefa}>Adicionar atrefa</button>
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
