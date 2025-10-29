import { Container, DeliveryOption } from "./style";
import { MdDeliveryDining, MdStorefront } from "react-icons/md";

export function DeliveryTypeSelector({ selected, onSelect, deliveryFee = 8.0 }) {
  return (
    <Container>
      <div className="options">
        <DeliveryOption
          selected={selected === "delivery"}
          onClick={() => onSelect("delivery")}
        >
          <MdDeliveryDining size={32} />
          <div className="option-info">
            <strong>Delivery</strong>
            <span>Entrega em domicílio</span>
            <span className="fee">Taxa: R$ {deliveryFee.toFixed(2)}</span>
          </div>
        </DeliveryOption>

        <DeliveryOption
          selected={selected === "pickup"}
          onClick={() => onSelect("pickup")}
        >
          <MdStorefront size={32} />
          <div className="option-info">
            <strong>Retirada</strong>
            <span>Retirar no restaurante</span>
            <span className="fee">Sem taxa</span>
          </div>
        </DeliveryOption>
      </div>
    </Container>
  );
}
