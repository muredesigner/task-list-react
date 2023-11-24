import { Box, Link, HStack, Center } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

function Menu() {
    return (
        <Box bg="teal.400" w="100%" p={4} color="white">
            <Center>
                <HStack spacing={8}>
                    <Link as={RouterLink} to="/" fontSize="xl">Home</Link>
                    <Link as={RouterLink} to="/tareas" fontSize="xl">Tareas</Link>
                    <Link as={RouterLink} to="/sobrenosotros" fontSize="xl">Sobre Nosotros</Link>
                </HStack>
            </Center>
        </Box>
    );
}

export default Menu;
