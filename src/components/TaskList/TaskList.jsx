import './TaskList.scss';
import { FaTrashAlt } from 'react-icons/fa';

function TaskList({ todos = [], handleToggleComplete, handleDelete }) {
    return (
        <div className="task-list">
            <div className="task-list-header">
                <div className="task-header">
                    All Tasks ({todos.length})
                </div>
            </div>
            <div className="task-list-items">
                {todos.length > 0 ? (
                    todos.map(todo => (
                        <div className="task-item" key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.isCompleted}
                                onChange={() => handleToggleComplete(todo.id)}
                            />
                            <span className={todo.isCompleted ? 'completed' : ''}>
                                {todo.title}
                            </span>
                            <button onClick={() => handleDelete(todo.id)}>
                                <FaTrashAlt />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="task-list-items-empty">
                        <p>No tasks available.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TaskList;
