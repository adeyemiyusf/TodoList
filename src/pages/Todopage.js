import {useState} from "react";
const Todopage = () => {
    return ( 
        const [todoList, setTodoList] = useState([]);
        const [newTask, setNewTask] = useState("");

        const handleChange = (event) =>{
            setNewTask(event.target.value);
       }
    )

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        }
        setTodoList ([...todoList, task])
    }
}
 
export default Todopage;