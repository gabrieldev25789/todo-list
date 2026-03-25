import { useRef, useState} from "react"
import "./Todo.css"
 
function Todo(){

const [tarefa, setTarefa] = useState([])
const [valor, setValor] = useState("")
const [erro, setErro] = useState("")
const [tarefaRemovida, setTarefaRemovida] = useState("")

  const inputRef = useRef(null)

  function enviarTarefa(){
    if(!valor){ 
      setErro("Adicione uma tarefa")
      return 
    }

    setErro("")
    setTarefa([...tarefa, {id: Date.now(), texto: valor, completa: false, prioridade: false }])

    setValor("")
    inputRef.current.focus()
  }

  
function removerTarefa(id) {
  setTarefa(tarefa.filter((_, i) => i !== id))
  
  setTarefaRemovida("Tarefa removida!")

  setTimeout(() => {
    setTarefaRemovida("")
  }, 2000)
}

  function completarTarefa(id) {
    setTarefa(tarefa.map((item) => 
    item.id === id ? { ...item, completa: !item.completa, } : item
  ))
}

function addPrioridade(id) {
  const novaLista = tarefa.map((item) =>
    item.id === id ? { ...item, prioridade: !item.prioridade } : item
  )

  const ordenada = [
    ...novaLista.filter(item => item.prioridade),
    ...novaLista.filter(item => !item.prioridade)
  ]

  setTarefa(ordenada)
}

return (
  <>
  <h3 className={tarefaRemovida ? "" : "hide"}>{tarefaRemovida}</h3>
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
        {tarefa.map((tarefa) => (
      <li key={tarefa.id} className={tarefa.prioridade ? "priordd" : ""}>
          <span className={tarefa.completa ? "completa" : ""}>
            {tarefa.texto}
          </span>
            <button onClick={() => completarTarefa(tarefa.id)}>
              {tarefa.completa ? "Desfazer" : "Completar"}
            </button>
            <button onClick={() => removerTarefa(tarefa.id)}>
              remover
            </button>
            <button 
            onClick={() => addPrioridade(tarefa.id)}>
              {tarefa.prioridade ? "Remover prioridade" : "Adicionar como prioridade"}
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