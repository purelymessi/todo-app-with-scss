import { useState } from "react";
import './Content.scss';
import InputForm from '../InputForm/InputForm';
import TaskList from '../TaskList/TaskList';

function Content() {
    const [todos, setTodos] = useState([]);

    function addTodo(value) {
        if (value.trim()) {
            const newTodo = {
                id: Math.random(),
                title: value,
                isCompleted: false,
            };
            setTodos([...todos, newTodo]);
        }
    }

    function removeTask(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function toggleTask(id) {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    }

    return (
        <div className="content">
            <InputForm handleAddTodo={addTodo} />
            <TaskList todos={todos} removeTask={removeTask} toggleTask={toggleTask} />
        </div>
    );
}

export default Content;
