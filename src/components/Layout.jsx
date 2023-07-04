import { Container } from "@nextui-org/react";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Container lg as="main">
        {children}
      </Container>
    </div>
  );
}
