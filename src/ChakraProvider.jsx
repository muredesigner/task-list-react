import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const theme = extendTheme({
  breakpoints,
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
})

function Chakra({ children }) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}

export default Chakra;
