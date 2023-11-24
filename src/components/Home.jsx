import { Box, Center, Heading } from "@chakra-ui/react";

function Home() {
    return (
        <Center h="30vh">
            <Box p={4}>
                <Heading as="h2" size="md">Bienvenido a la aplicación de lista de tareas</Heading>
                <p>Esta es una aplicación simple para ayudarte a mantener un registro de tus tareas. Puedes agregar nuevas tareas, marcar tareas como completadas y eliminar tareas que ya no necesites.</p>
            </Box>
        </Center>
    );
}

export default Home;
