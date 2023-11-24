import { useState, useEffect } from 'react';

function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const addTask = (title, description) => {
        const newTasks = [...tasks, { title, description, status: false }];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const deleteTarea = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const editTarea = (index, title, description) => {
        const newTasks = tasks.map((task, i) => i === index ? { title, description, status: task.status } : task);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    return { tasks, addTask, deleteTarea, editTarea };
}

export default useTasks;