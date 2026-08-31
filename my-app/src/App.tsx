import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Header from './component/Header';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import type { Task } from './component/TaskItem';

const API_URL = 'http://localhost:3000/api/todos';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // 1️⃣ جلب المهام من الباك إند
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        
        const formattedTasks = response.data.map((item: any) => ({
          id: item.id,
          text: item.title,
          completed: item.completed
        }));

        setTasks(formattedTasks);
      } catch (error) {
        console.error("فشل في جلب البيانات من السيرفر:", error);
      }
    };

    fetchTasks();
  }, []);

  // 2️⃣ إضافة مهمة جديدة (POST)
  const handleAddTask = async (text: string) => {
  try {
    const response = await axios.post(API_URL, { title: text });
    
    // فحص مصدر البيانات سواء كان response.data مباشرة أو داخل response.data.data
    const data = response.data.data || response.data;

    const newTask: Task = {
      id: data.id,
      text: data.title || data.text || text, // حماية لضمان وجود النص دائماً
      completed: data.completed || false,
    };

    setTasks((prev) => [...prev, newTask]);
  } catch (error) {
    console.error("فشل في إضافة المهمة:", error);
  }
};

  // 3️⃣ تعديل حالة المهمة (PATCH)
  const handleToggleTask = async (id: number) => {
    const targetTask = tasks.find((t) => t.id === id);
    if (!targetTask) return;

    try {
      await axios.patch(`${API_URL}/${id}`, {
        completed: !targetTask.completed
      });

      setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    } catch (error) {
      console.error("فشل في تعديل حالة المهمة:", error);
    }
  };

  // 4️⃣ حذف مهمة (DELETE)
  const handleDeleteTask = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (error) {
      console.error("فشل في حذف المهمة:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-6 space-y-6">
        <Header title="To-Do List " />
        <TaskInput onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
      </div>
    </div>
  );
}

export default App;