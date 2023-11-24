import { Box, Heading } from "@chakra-ui/react";

function Header() {
    return (
        <Box bg="teal.400" w="100%" p={4} color="white" textAlign="center">
            <Heading as="h1" size="lg">Bienvenido a la aplicación de lista de tareas</Heading>
        </Box>
    );
}

export default Header;
