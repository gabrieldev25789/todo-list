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
    }

    setErro("")
    setTarefa([...tarefa, { texto: valor, completa: false, prioridade: false }])

    setValor("")
    inputRef.current.focus()
  }

  function removerTarefa(index) {
    setTarefa(tarefa.filter((_, i) => i !== index))
}

  function completarTarefa(index) {
    setTarefa(tarefa.map((item, i) => 
    i === index ? { ...item, completa: !item.completa, } : item
  ))
}

function addPrioridade(index){
  setTarefa(tarefa.map((item, i) => 
    i === index ? { ...item, prioridade: !item.prioridade, } : item
  ))
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
        onChange={(e)=> setValor(e.target.value)}
      />

      <button onClick={enviarTarefa}>
        Adicionar tarefa
      </button>
       
      <ul>
        {tarefa.map((tarefa, index) => (
      <li key={index} className={tarefa.prioridade ? "priordd" : ""}>
          <span className={tarefa.completa ? "completa" : ""}>
            {tarefa.texto}
          </span>
            <button onClick={() => completarTarefa(index)}>
              {tarefa.completa ? "Desfazer" : "Completar"}
            </button>
            <button onClick={() => removerTarefa(index)}>
              remover
            </button>
            <button 
            onClick={() => addPrioridade(index)}>
              Adicionar como prioridade
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