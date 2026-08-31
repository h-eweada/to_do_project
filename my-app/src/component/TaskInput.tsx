import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedText = text.trim();

    if (!sanitizedText) {
      setError('you Cannot add an empty task');
      return;
    }

    onAddTask(sanitizedText);
    setText('');
    setError('');
  };

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (error) setError('');
            }}
            placeholder="Add new task"
            className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Add
          </button>
        </div>
      </form>

      {error && (
        <p className="text-red-500 text-sm font-medium mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export default TaskInput;