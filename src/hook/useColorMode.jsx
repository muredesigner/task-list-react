import { useColorMode, Button } from "@chakra-ui/react";

function MyComponent() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            Cambiar a modo {colorMode === "light" ? "oscuro" : "claro"}
        </Button>
    );
}

export default MyComponent;