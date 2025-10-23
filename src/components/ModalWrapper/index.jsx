import { Container, Content } from "./style";
import { useEffect } from "react";

export function ModalWrapper({ children, onClose }) {
  useEffect(() => {
    // Prevenir scroll do body quando modal está aberto
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <Container onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Container>
  );
}
