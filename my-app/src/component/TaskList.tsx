import TaskItem, { type Task } from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

// 2. تطبيق الأنواع على المكون
function TaskList({ tasks, onDelete, onToggle }: TaskListProps) {
    if (tasks.length === 0) {
        return <p style={{ textAlign: 'center' }}>لا توجد مهام حالياً!</p>;
    }

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
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