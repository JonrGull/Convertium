import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../components/Nav";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
