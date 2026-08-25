import React from 'react';

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
    <li style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '8px',
      borderBottom: '1px solid #ccc',
      textDecoration: task.completed ? 'line-through' : 'none'
    }}>
      <div>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggle(task.id)} 
        />
        <span style={{ marginRight: '8px' }}>{task.text}</span>
      </div>
      <button onClick={() => onDelete(task.id)} style={{ color: 'red' }}>حذف</button>
    </li>
  );
}

export default TaskItem;