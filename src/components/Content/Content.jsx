import { useState } from "react";
import './Content.scss';
import InputForm from '../InputForm/InputForm';
import TaskList from '../TaskList/TaskList';

function Content() {
    const [todos, setTodos] = useState([]);

    function addTodo(value) {
        setTodos([...todos, {
            id: todos.length,
            title: value,
            isCompleted: false,
        }]);
    }

    function handleToggleComplete(id) {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    }

    function handleDelete(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="content">
            <InputForm handleAddTodo={addTodo} />
            <TaskList todos={todos} handleToggleComplete={handleToggleComplete} handleDelete={handleDelete} />
        </div>
    );
}

export default Content;
