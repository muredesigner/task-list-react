import { Box, Checkbox, IconButton, Text, Spacer } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function Tarea({ tarea, index, deleteTarea, editTask, setEditTaskIndex, setNewTask }) {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" p={2} borderRadius="md" borderWidth="1px">
            <Checkbox size="lg" colorScheme="teal" defaultChecked={tarea.status} mr={4}>
                <Text as={tarea.status ? "s" : "p"} fontSize="xl" onClick={() => editTask(index)}>{tarea.title}</Text>
                <Text fontSize="md">{tarea.description}</Text>
            </Checkbox>
            <Spacer />
            <IconButton aria-label="Editar tarea" icon={<EditIcon />} onClick={() => { setEditTaskIndex(index); setNewTask(tarea); }} mr={4} />
            <IconButton aria-label="Eliminar tarea" icon={<DeleteIcon />} onClick={() => deleteTarea(index)} />
        </Box>
    );
}

export default Tarea;