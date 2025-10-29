import { Button } from "../Button";
import { Container, ModalContent } from "./style";
import { LuTimer } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

export function PaymentConfirmationModal({ status, onClose, onGoToHistory }) {
  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <>
            <LuTimer size={80} className="icon-spin" />
            <h3>Aguardando Confirmação</h3>
            <p>
              Por favor, aguarde enquanto o administrador confirma seu pagamento.
              Este processo pode levar alguns minutos.
            </p>
          </>
        );

      case "confirmed":
        return (
          <>
            <FaCheckCircle size={80} className="icon-success" />
            <h3>Pagamento Confirmado!</h3>
            <p>
              Seu pagamento foi confirmado com sucesso. Você será redirecionado
              para o histórico de pedidos.
            </p>
            <div className="button-container">
              <Button title="Ver Histórico" onClick={onGoToHistory} />
            </div>
          </>
        );

      case "error":
        return (
          <>
            <MdError size={80} className="icon-error" />
            <h3>Erro na Confirmação</h3>
            <p>
              Não foi possível confirmar seu pagamento. Por favor, tente
              novamente ou entre em contato com o suporte.
            </p>
            <div className="button-container">
              <Button title="Fechar" onClick={onClose} />
            </div>
          </>
        );

      case "timeout":
        return (
          <>
            <LuTimer size={80} className="icon-warning" />
            <h3>Tempo Esgotado</h3>
            <p>
              O tempo de espera foi excedido. Seu pedido ainda está sendo
              processado. Você pode verificar o status no histórico de pedidos.
            </p>
            <div className="button-container">
              <Button title="Ver Histórico" onClick={onGoToHistory} />
              <Button title="Fechar" onClick={onClose} />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      <ModalContent>{renderContent()}</ModalContent>
    </Container>
  );
}
