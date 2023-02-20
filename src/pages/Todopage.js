import {useState} from "react";
const Todopage = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState ("");

    const handleChange = (event) =>{
        setNewTask(event.target.value);
   }
   

   const addTask = () => {
    // const newTodoList = [...todoList, newTask];

    const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
    }

    setTodoList ([...todoList, task])
   }
    

   const deleteTask = (id) => {
    //   const newTodoList = todoList.filter((task) => task !== taskName)
    //   {
    //     if (task === taskName){
    //         return false
    //     }else {
    //         return true;
    //     }
    //   }
      

      setTodoList(todoList.filter((task) => task.id !== id))
   }

   const completeTask = (id) => {
    setTodoList(
        todoList.map((task) => {
             if(task.id ===id) {
                return {...task, completed: true};
             }else{
                return task
             }
        })
    )
   }


    return (  
        <div>
        <div className="addTask">

            <input onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
            </div>
            <div className="List">
                {todoList.map((task) => {
                    return (
                        <Task
                        taskName={task.taskName}
                        id = {task.id}
                        completed={task.completed}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                        />
                    )
                })}

            </div>

        
        </div>
    );
}
 
export default Todopage;