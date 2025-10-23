import { Container } from "./style";
import { PiShoppingCart } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function FloatingCart() {
  const navigate = useNavigate();
  const { getTotalItems, getTotalValue } = useCart();

  const itemCount = getTotalItems();
  const totalValue = getTotalValue();

  const formatPrice = (value) => {
    return value.toFixed(2).replace(".", ",");
  };

  if (itemCount === 0) {
    return null;
  }

  return (
    <Container onClick={() => navigate("/checkout")}>
      <div className="cart-info">
        <PiShoppingCart size={24} />
        <span className="item-count">{itemCount}</span>
      </div>
      <span className="total-value">R$ {formatPrice(totalValue)}</span>
    </Container>
  );
}
