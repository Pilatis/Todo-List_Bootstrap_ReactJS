//hooks
import { useEffect, useState } from 'react';

//css
import './App.css'
//components
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

/*let initialState = [//Array de objetos
  {
    id: 1,
    title: "title 1",
    priority: "1",
    description: "Primeira Atividade"
  },
  {
    id: 2,
    title: "title 2",
    priority: "2",
    description: "Segunda Atividade"
  },
  {
    id: 3,
    title: "title 3",
    priority: "3",
    description: "Terceira Atividade ",
  }
]//Array de objetos*/



const App = () => {//define um componente react chamado App
  //atividades, setAtividades
  const [tasks, setTasks] = useState([])//Usa o hook useState do React para criar um estado chamado tasks, inicializado com o valor de initialState. tasks armazenará a lista de tarefas e setTasks será usado para atualizar esse estado.
  const [editActivity, setEditActivity] = useState({id: 0})//atividade
  const [index, setIndex] = useState({});


  useEffect(() => {
    tasks.length <= 0 ?
      setIndex(1)
      :
      setIndex(Math.max.apply(Math, tasks && tasks.map((item) => item.id)) + 1)

  }, [tasks])


  const handleAddActivity = (ativ) => {//função  chamada quando o formulário for enviado.

    setTasks([...tasks, { ...ativ, id: index }])//Atualiza o estado tasks usando o setTasks. Ele utiliza o spread operator (...) para criar um novo array de tarefas, copiando os valores anteriores de tasks e adicionando a nova tarefa representada por ativ.
  }


  //Deletar a atividade
  const handleDelete = (id) => {
    const activityFilter = tasks.filter(task => task.id !== id)//Filtra o array tasks. se a task ter o id indicado ela vai ser removida do array
    setTasks([...activityFilter])
  }


  //Editar a atividade
  const handleEdit = (id) => {//pegarAtividade
    const task = tasks.filter((task) => task.id === id)
    setEditActivity(task[0])//setAtividade
  }

  const handleCancelActivity = () => {
    setEditActivity({ id: 0 })
  }


  //função de atualizar a ativdade
  const handleupdateActivity = (ativ) => {
    setTasks(tasks.map(item => item.id === ativ.id ? ativ : item));
    setEditActivity({ id: 0 })
  }

  return (
    <div className='  p-3 mb-2 bg-body-secondary ur'>
     
      
      <ActivityForm
        handleAddActivity={handleAddActivity}//add+
        handleActivity={editActivity}//AtividadeSelecionada={atividade}
        handleupdateActivity={handleupdateActivity}//update
        handleCancelActivity={handleCancelActivity}//cancel
        tasks={tasks}
      />

      <ActivityList
        tasks={tasks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}

      />

       
      
    </div>
  )
}

export default App

