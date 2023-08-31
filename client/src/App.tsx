import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <p>Hello User</p>
    </ChakraProvider>
  );
}

export default App;
