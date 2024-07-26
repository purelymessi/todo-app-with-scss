import { useState } from 'react';
import "./TaskList.scss";
import { FaTrashAlt } from "react-icons/fa";

function TaskList({ todos = [], handleToggleComplete, handleDelete }) {
    const [showCompleted, setShowCompleted] = useState(false);

    const currentTodos = todos.filter(todo => !todo.isCompleted);
    const completedTodos = todos.filter(todo => todo.isCompleted);

    return (
        <div className="task-list container">
            <div className="task-list-header">
                <div
                    className={`task-header ${!showCompleted ? 'active' : ''}`}
                    onClick={() => setShowCompleted(true)}
                >
                    <h2>Current</h2>
                    <span className="task-count">{currentTodos.length}</span>
                </div>
                <div
                    className={`task-header ${showCompleted ? 'active' : ''}`}
                    onClick={() => setShowCompleted(true)}
                >
                    <h2>Completed</h2>
                    <span className="task-count">{completedTodos.length}</span>
                </div>
            </div>
            <div className="task-list-items">
                {(!showCompleted ? currentTodos : completedTodos).length > 0 ? (
                    (!showCompleted ? currentTodos : completedTodos).map((todo) => (
                        <div className="task-item" key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.isCompleted}
                                onChange={() => handleToggleComplete(todo.id)}
                            />
                            <span className={todo.isCompleted ? "completed" : ""}>
                                {todo.title}
                            </span>
                            <button onClick={() => handleDelete(todo.id)}>
                                <FaTrashAlt />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="task-list-items-empty">
                        <p>{!showCompleted ? "No current tasks." : "No completed tasks."}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TaskList;
