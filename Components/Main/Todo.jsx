import { useRef, useState } from "react"
import "./Todo.css"
 
function Todo(){

const [tarefa, setTarefa] = useState([])
const [valor, setValor] = useState("")
const [erro, setErro] = useState("")

  const inputRef = useRef(null)

  function enviarTarefa(){
    if(!valor){ 
      setErro("Adicione uma tarefa")
      return 
    } else{
      setErro("")
    }

    setTarefa([...tarefa, valor])

    console.log(tarefa)
    setValor("")
    inputRef.current.focus()
  }

 function removerTarefa(index) {
  setTarefa(tarefa.filter((_, i) => i !== index))
}

  return (
    <>
    <div id="tarefas">
      <h2>Todo-list</h2>
      <input 
      type="text" 
      placeholder="adicione tarefa"
      value={valor}
      ref={inputRef}
      onChange={(e)=> setValor(e.target.value)}/>

      <button onClick={enviarTarefa}>Adicionar tarefa</button>
       
      <ul>
        {tarefa.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button onClick={() => removerTarefa(index)}>
              remover
            </button>
          </li>
        ))}
      </ul> 
    </div>
      {erro && <p>{erro}</p>} 
    </>
  )
}


export default Todo