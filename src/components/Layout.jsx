import { Container } from "@nextui-org/react";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Container as="main">{children}</Container>
    </div>
  );
}
