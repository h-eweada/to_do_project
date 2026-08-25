import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;


    onAddTask(text);
    setText('');

    
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add new task" 
        style={{ flex: 1, padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>Add</button>
    </form>
  );
}

export default TaskInput;