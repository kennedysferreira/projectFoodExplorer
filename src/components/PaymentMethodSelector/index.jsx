import { Container, PaymentOption } from "./style";
import { FaPix } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";

export function PaymentMethodSelector({ selected, onSelect }) {
  return (
    <Container>
      <div className="options">
        <PaymentOption
          selected={selected === "pix"}
          onClick={() => onSelect("pix")}
        >
          <FaPix size={32} />
          <div className="option-info">
            <strong>PIX</strong>
            <span>Pagamento instantâneo via QR Code</span>
            <span className="highlight">Aprovação automática</span>
          </div>
        </PaymentOption>

        <PaymentOption
          selected={selected === "cash"}
          onClick={() => onSelect("cash")}
        >
          <IoWalletOutline size={32} />
          <div className="option-info">
            <strong>Dinheiro</strong>
            <span>Pagamento na entrega ou retirada</span>
          </div>
        </PaymentOption>

        <PaymentOption
          selected={selected === "card"}
          onClick={() => onSelect("card")}
        >
          <FaCreditCard size={32} />
          <div className="option-info">
            <strong>Cartão</strong>
            <span>Débito ou crédito na entrega</span>
            <span className="note">Maquininha na entrega/retirada</span>
          </div>
        </PaymentOption>
      </div>
    </Container>
  );
}
