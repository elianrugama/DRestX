import { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api";
import { TaskCard } from "./TaskCard";
export function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadtasks() {
            const tasks = await getAllTasks();
            setTasks(tasks.data);
            console.log(tasks.data);
        }
        loadtasks();

    }, [])

    return (
        //grid tailwind css
        <div className='grid'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                tasks.map(task => <TaskCard key={task.id} task={task} />)
            }
        </div>
        </div>
        
        
    );
}

