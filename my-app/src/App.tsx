import { useState } from 'react';
import Header from './component/Header'; 
import TaskInput from './component/TaskInput';
import TaskList from "./component/TaskList";


export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  
  const [tasks, setTasks] = useState<Task[]>([

  ]);

  
  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <Header title="My-to-do list" />
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}

export default App;

