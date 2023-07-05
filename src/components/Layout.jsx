import { Container } from "@nextui-org/react";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Container md as="main">
        {children}
      </Container>
    </div>
  );
}
