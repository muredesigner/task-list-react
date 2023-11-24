import { Box, Heading, Text } from "@chakra-ui/react";

function SobreNosotros() {
    return (
        <Box p={4}>
            <Heading as="h2" size="md">Sobre Nosotros</Heading>
            <Text mt={4}>Esta es una aplicación de lista de tareas creada con React y Vite. Utilizamos Chakra UI para el diseño y React Router para la navegación.</Text>
            <Text mt={4}>Las funcionalidades de la aplicación incluyen:</Text>
            <ul>
                <li>Agregar nuevas tareas con un título y descripción</li>
                <li>Marcar tareas como completadas</li>
                <li>Eliminar tareas que ya no necesites</li>
            </ul>
            <Text mt={4}>Esperamos que encuentres útil esta aplicación para mantener un registro de tus tareas.</Text>
        </Box>
    );
}

export default SobreNosotros;