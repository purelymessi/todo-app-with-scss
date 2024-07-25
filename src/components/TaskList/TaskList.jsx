import React from "react";
import "./TaskList.scss";

function TaskList({ todos, removeTask, toggleTask }) {
    return (
        <div className="task-list container">
            <div className="task-list-top">
                <h1>Current</h1>
                <h1>Completed</h1>
            </div>
            {todos && todos.length > 0 ? (
                <div className="task-list-items">
                    {todos.map((todo) => (
                        <div key={todo.id} className="task-item">
                            <input 
                                type="checkbox" 
                                checked={todo.isCompleted} 
                                onChange={() => toggleTask(todo.id)}
                            />
                            <span className={todo.isCompleted ? "completed" : ""}>
                                {todo.title}
                            </span>
                            <button onClick={() => removeTask(todo.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="task-list-items task-list-items-empty">
                    <p>The ToDo list is empty. Please add tasks to be done. Organized life with todo.</p>
                </div>
            )}
        </div>
    );
}

export default TaskList;
