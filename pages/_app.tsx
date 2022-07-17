import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
