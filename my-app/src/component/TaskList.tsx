import TaskItem, { type Task } from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

// 2. تطبيق الأنواع على المكون
function TaskList({ tasks, onDelete, onToggle }: TaskListProps) {
    if (tasks.length === 0) {
        return( <p className="text-center text-slate-400 font-medium py-4">
        No Tasks Now
      </p> );  }

    return (
        <ul className="space-y-3">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
}

export default TaskList;