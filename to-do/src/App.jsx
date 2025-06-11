import { useState } from 'react'

function App () { 
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidades X no sistema",
      category: "trabalho",
      isComplement: false,
    },
     {
      id: 2,
      text: "Ir para a Academia",
      category: "pessoal",
      isComplement: false,
    },
     {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isComplement: false,
    },
  ]);

  return <div className='app'>
  <h1>Lista de  Tarefas</h1>
  <div>
    {todos.map((todo) => (
      <div className='todo'>
        <div className='content'>
          <p>{todo.text}</p>
          <p className='category'>({todo.category})</p>
        </div>
        <div>
          <button>Completar</button>
          <button>X</button>
          </div>
      </div>    
    ))}
  </div>
</div>;
};

export default App
