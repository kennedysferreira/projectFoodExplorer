import { toast } from "react-toastify";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ModalWrapper } from "../../components/ModalWrapper";
import { Container, PaymentCard, ModalContent } from "./style";

export function AdminPayments() {
  const [pendingPayments, setPendingPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [paymentNotes, setPaymentNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function updateTimeToBrazil(timer) {
    let setData = new Date(timer);
    let day = setData.getDate();
    let month = setData.getMonth() + 1;
    let hours = setData.getHours() - 3;
    let minutes = setData.getMinutes();

    if (hours < 0) {
      hours += 24;
      day--;
    }

    if (hours > 24) {
      hours -= 24;
      day++;
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    return `${day}/${month} às ${hours}h${minutes}`;
  }

  async function loadPendingPayments() {
    try {
      const response = await api.get("/orders/payment-status/pending");
      setPendingPayments(response.data);
    } catch (error) {
      console.error("Error loading pending payments:", error);
      toast.error("Erro ao carregar pagamentos pendentes");
    }
  }

  async function handleConfirmPayment() {
    if (!selectedPayment) return;

    try {
      setLoading(true);
      await api.patch(`/orders/${selectedPayment.id}/confirm-payment`);

      toast.success("Pagamento confirmado com sucesso!");
      setShowConfirmModal(false);
      setSelectedPayment(null);
      setPaymentNotes("");
      await loadPendingPayments();
    } catch (error) {
      console.error("Error confirming payment:", error);
      toast.error(error.response?.data?.message || "Erro ao confirmar pagamento");
    } finally {
      setLoading(false);
    }
  }

  async function handleRejectPayment() {
    if (!selectedPayment) return;

    if (!paymentNotes.trim()) {
      toast.error("Por favor, adicione um motivo para rejeitar o pagamento");
      return;
    }

    try {
      setLoading(true);
      await api.patch(`/orders/${selectedPayment.id}/status`, {
        status: "cancelled"
      });

      toast.success("Pagamento rejeitado");
      setShowRejectModal(false);
      setSelectedPayment(null);
      setPaymentNotes("");
      await loadPendingPayments();
    } catch (error) {
      console.error("Error rejecting payment:", error);
      toast.error(error.response?.data?.message || "Erro ao rejeitar pagamento");
    } finally {
      setLoading(false);
    }
  }

  function openConfirmModal(payment) {
    setSelectedPayment(payment);
    setPaymentNotes("");
    setShowConfirmModal(true);
  }

  function openRejectModal(payment) {
    setSelectedPayment(payment);
    setPaymentNotes("");
    setShowRejectModal(true);
  }

  function formatPrice(price) {
    return Number(price).toFixed(2).replace(".", ",");
  }

  function getPaymentMethodLabel(method) {
    const labels = {
      credit: "Cartão de Crédito",
      debit: "Cartão de Débito",
      pix: "PIX"
    };
    return labels[method] || method;
  }

  useEffect(() => {
    loadPendingPayments();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <div className="text-content">
          <button className="back-button" onClick={() => navigate(-1)}>
            <FaArrowLeft size={20} /> Voltar
          </button>
          <h2>Pagamentos Pendentes</h2>
          <p className="subtitle">
            Confirme ou rejeite pagamentos aguardando verificação manual
          </p>
        </div>

        <div className="payments-grid">
          {pendingPayments.length === 0 ? (
            <div className="empty-state">
              <p>Nenhum pagamento pendente no momento</p>
            </div>
          ) : (
            pendingPayments.map((payment) => (
              <PaymentCard key={payment.id}>
                <div className="card-header">
                  <h3>Pedido #{payment.id < 10 ? `0${payment.id}` : payment.id}</h3>
                  <span className="payment-method">
                    {getPaymentMethodLabel(payment.payment_method)}
                  </span>
                </div>

                <div className="card-body">
                  <div className="info-row">
                    <span className="label">Cliente:</span>
                    <span className="value">{payment.user?.name || payment.user_name || "N/A"}</span>
                  </div>

                  <div className="info-row">
                    <span className="label">Tipo de entrega:</span>
                    <span className="value">
                      {payment.delivery_type === "delivery" ? "Delivery" : "Retirada"}
                    </span>
                  </div>

                  {payment.delivery_type === "delivery" && payment.delivery_address && (
                    <div className="info-row">
                      <span className="label">Endereço:</span>
                      <span className="value" style={{ whiteSpace: 'pre-line' }}>
                        {payment.delivery_address}
                      </span>
                    </div>
                  )}

                  <div className="info-row">
                    <span className="label">Itens:</span>
                    <div className="items-list">
                      {payment.items && payment.items.map((item, index) => (
                        <div key={index} className="item">
                          {item.quantity}x {item.plate?.name || item.plate_name || "Item"} - R$ {formatPrice(item.subtotal || (item.unit_price * item.quantity))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="info-row total">
                    <span className="label">Total:</span>
                    <span className="value">R$ {formatPrice(payment.total)}</span>
                  </div>

                  <div className="info-row">
                    <span className="label">Data do pedido:</span>
                    <span className="value">{updateTimeToBrazil(payment.created_at)}</span>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="btn-confirm"
                    onClick={() => openConfirmModal(payment)}
                  >
                    <FaCheck /> Confirmar Pagamento
                  </button>
                  <button
                    className="btn-reject"
                    onClick={() => openRejectModal(payment)}
                  >
                    <FaTimes /> Rejeitar
                  </button>
                </div>
              </PaymentCard>
            ))
          )}
        </div>
      </main>
      <Footer />

      {showConfirmModal && (
        <ModalWrapper onClose={() => {
          setShowConfirmModal(false);
          setSelectedPayment(null);
          setPaymentNotes("");
        }}>
          <ModalContent>
            <h3>Confirmar Pagamento</h3>
            <p>
              Você está confirmando o pagamento do pedido{" "}
              <strong>#{selectedPayment?.id}</strong>
            </p>
            <p className="modal-info">
              Total: <strong>R$ {formatPrice(selectedPayment?.total)}</strong>
            </p>

            <label>
              Observações (opcional):
              <textarea
                value={paymentNotes}
                onChange={(e) => setPaymentNotes(e.target.value)}
                placeholder="Adicione observações sobre a confirmação..."
                rows={4}
              />
            </label>

            <div className="modal-actions">
              <button
                className="btn-cancel"
                onClick={() => {
                  setShowConfirmModal(false);
                  setSelectedPayment(null);
                  setPaymentNotes("");
                }}
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                className="btn-confirm"
                onClick={handleConfirmPayment}
                disabled={loading}
              >
                {loading ? "Confirmando..." : "Confirmar Pagamento"}
              </button>
            </div>
          </ModalContent>
        </ModalWrapper>
      )}

      {showRejectModal && (
        <ModalWrapper onClose={() => {
          setShowRejectModal(false);
          setSelectedPayment(null);
          setPaymentNotes("");
        }}>
          <ModalContent>
            <h3>Rejeitar Pagamento</h3>
            <p>
              Você está rejeitando o pagamento do pedido{" "}
              <strong>#{selectedPayment?.id}</strong>
            </p>

            <label>
              Motivo da rejeição (obrigatório):
              <textarea
                value={paymentNotes}
                onChange={(e) => setPaymentNotes(e.target.value)}
                placeholder="Explique o motivo da rejeição do pagamento..."
                rows={4}
                required
              />
            </label>

            <div className="modal-actions">
              <button
                className="btn-cancel"
                onClick={() => {
                  setShowRejectModal(false);
                  setSelectedPayment(null);
                  setPaymentNotes("");
                }}
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                className="btn-reject"
                onClick={handleRejectPayment}
                disabled={loading}
              >
                {loading ? "Rejeitando..." : "Rejeitar Pagamento"}
              </button>
            </div>
          </ModalContent>
        </ModalWrapper>
      )}
    </Container>
  );
}
