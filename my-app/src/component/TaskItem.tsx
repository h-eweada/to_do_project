import { FaTrash } from 'react-icons/fa';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {
  return (
    <li className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
        />
        <span className={`font-medium ${task.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
          {task.text}
        </span>
      </div>
      <button 
        onClick={() => onDelete(task.id)} 
        className="text-slate-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
        title="Delete"
      >
        <FaTrash size={16} />
      </button>
    </li>
  );
}

export default TaskItem;