import React, { useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import TaskList from './components/TaskList/TaskList';
import './index.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div className="app">
            <Header />
            <Content addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
