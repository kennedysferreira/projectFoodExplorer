import { Container } from "./style";
import { FoodExplorer } from "../FoodExplorer";

export function Footer() {
  const actualYear = new Date();

  return (
    <Container>
      <FoodExplorer />
      <p>© Kennedy Ferreira {actualYear.getUTCFullYear()} - Todos os direitos reservados.</p>
    </Container>
  );
}
