import { VStack, Center } from "@chakra-ui/react";
import Tarea from "./Tarea";

function TaskList({ tasks, deleteTarea, editTask, setEditTaskIndex, setEditTask, toggleTaskStatus }) {
    return (
        <Center>
            <VStack spacing={4} align="stretch">
                {tasks.map((tarea, index) => (
                    <Tarea key={index} tarea={tarea} index={index} deleteTarea={deleteTarea} editTask={editTask} setEditTaskIndex={setEditTaskIndex} setEditTask={setEditTask} toggleTaskStatus={toggleTaskStatus} />
                ))}
            </VStack>
        </Center>
    );
}

export default TaskList;