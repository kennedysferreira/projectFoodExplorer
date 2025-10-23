import { Container } from "./style";
import { useState, useEffect, useRef, memo } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export const Count = memo(function Count({ onCountChange, initialValue = 1 }) {
  const [count, setCount] = useState(initialValue);
  const isUserInteraction = useRef(false);

  // Atualizar count quando initialValue mudar (sincronização externa)
  useEffect(() => {
    if (initialValue !== count && !isUserInteraction.current) {
      setCount(initialValue);
    }
    isUserInteraction.current = false;
  }, [initialValue]);

  // Notificar mudanças apenas quando for interação do usuário
  useEffect(() => {
    if (isUserInteraction.current && count >= 0 && count <= 99) {
      onCountChange(count);
    }
  }, [count, onCountChange]);

  const handleDecrement = () => {
    isUserInteraction.current = true;
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const handleIncrement = () => {
    isUserInteraction.current = true;
    setCount((prevCount) => Math.min(99, prevCount + 1));
  };

  return (
    <Container>
      <FiMinusCircle onClick={handleDecrement} />
      <span>{count}</span>
      <FiPlusCircle onClick={handleIncrement} />
    </Container>
  );
});
