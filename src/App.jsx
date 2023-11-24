import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Button, useColorMode, Flex, Center } from '@chakra-ui/react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Home from './components/Home';
import SobreNosotros from './components/SobreNosotros';
import Menu from './components/Menu';
import useTasks from './hook/useTasks';
import './App.css';

function App() {
  
    const { tasks, addTask, deleteTarea, editTarea } = useTasks();
    const [newTask, setNewTask] = useState({ title: '', description: '' });
    const [editTaskIndex, setEditTaskIndex] = useState(null);
    const { colorMode, toggleColorMode } = useColorMode();

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.title.length >= 3) {
            addTask(newTask.title, newTask.description);
            setNewTask({ title: '', description: '' });
        } else {
            alert('El nombre de la tarea debe tener al menos 3 caracteres');
        }
    };

    return (
        <ChakraProvider>
            <Router>
                <Menu />
                <Flex w="100%" p={2} justifyContent="flex-end">
                    <Button onClick={toggleColorMode}>
                        Cambiar a modo {colorMode === "light" ? "oscuro" : "claro"}
                    </Button>
                </Flex>
                <Routes>
                    <Route path="/sobrenosotros" element={<SobreNosotros />} />
                    <Route path="/tareas" element={
                        <div>
                            <Header />
                            <TaskList tasks={tasks} deleteTarea={deleteTarea} editTask={editTarea} setEditTaskIndex={setEditTaskIndex} setNewTask={setNewTask} />
                        {/* Formulario para agregar tareas */}
                        <Center>
                            <form onSubmit={handleAddTask}>
                                <input type="text" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} placeholder="Título de la tarea" required />
                                <input type="text" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} placeholder="Descripción de la tarea" />
                                <Button type="submit">Agregar tarea</Button>
                            </form>
                        </Center>

                        {/* Formulario para editar tareas */}
                        {editTaskIndex !== null && (
                            <Center>
                                <form onSubmit={(e) => { e.preventDefault(); editTarea(editTaskIndex, newTask.title, newTask.description); setEditTaskIndex(null); }}>
                                    <input type="text" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} placeholder="Nuevo título de la tarea" required />
                                    <input type="text" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} placeholder="Nueva descripción de la tarea" />
                                    <Button type="submit">Editar tarea</Button>
                                </form>
                            </Center>
                            )}
                        </div>
                    } />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;