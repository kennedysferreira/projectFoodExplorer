import { toast } from "react-toastify";
import { api } from "../../service/api";
import { useEffect, useState, useRef } from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PaymentConfirmationModal } from "../../components/PaymentConfirmationModal";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Container, RequestList, StatusPayment } from "./style";

import { LuTimer } from "react-icons/lu";
import { AiOutlineStop } from "react-icons/ai";
import { PiForkKnifeBold, PiCookingPot } from "react-icons/pi";

export function Payment() {
  const imageURL = `${api.defaults.baseURL}/files`;
  const [plateRequest, setPlateRequest] = useState([]);
  const [resultStatus, setResultStatus] = useState({});
  const [price, setPrice] = useState("");
  const [pixCode, setPixCode] = useState("");
  const [isNewSystem, setIsNewSystem] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState("loading");
  const { id } = useParams();

  const navigate = useNavigate();
  const { addItem } = useCart();
  const pollingIntervalRef = useRef(null);
  const pollingAttemptsRef = useRef(0);

  const paymentStatus = [
    {
      status: "cancelado",
      message: "Pedido cancelado",
      image: AiOutlineStop,
    },
    {
      status: "finalizado",
      message: "Pedido entregue",
      image: PiForkKnifeBold,
    },
    {
      status: "processando",
      message: "Processando o pedido",
      image: LuTimer,
    },
    {
      status: "cozinha",
      message: "Seu pedido está sendo preparado",
      image: PiCookingPot,
    },
  ];

  // Limpar polling quando componente desmontar
  useEffect(() => {
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, []);

  async function checkOrderStatus() {
    try {
      const response = await api.get(`/orders/${id}`);
      const orderStatus = response.data.status;

      console.log("[Payment] Polling - Order status:", orderStatus);

      if (orderStatus === "confirmed" || orderStatus === "preparing") {
        // Pagamento confirmado!
        clearInterval(pollingIntervalRef.current);
        setModalStatus("confirmed");

        setTimeout(() => {
          setShowModal(false);
          navigate("/order-history");
        }, 3000);

        return true;
      }

      return false;
    } catch (error) {
      console.error("[Payment] Error checking order status:", error);
      return false;
    }
  }

  async function handleConfirmPayment() {
    try {
      if (isNewSystem) {
        // Abrir modal de loading
        setModalStatus("loading");
        setShowModal(true);
        pollingAttemptsRef.current = 0;

        // Iniciar polling para verificar status
        pollingIntervalRef.current = setInterval(async () => {
          pollingAttemptsRef.current += 1;

          // Máximo de 2 minutos (24 tentativas * 5 segundos)
          if (pollingAttemptsRef.current >= 24) {
            clearInterval(pollingIntervalRef.current);
            setModalStatus("timeout");
            return;
          }

          await checkOrderStatus();
        }, 5000);

        // Verificar imediatamente uma vez
        await checkOrderStatus();

      } else {
        // Sistema legacy
        const path = "https://foodexplorer-delivery.netlify.app";
        window.open(`${path}/payment/qrcode/${id}`, "_blank");
        updateStatusPayment();
      }
    } catch (error) {
      console.error("[Payment] Error confirming payment:", error);
      setModalStatus("error");
      toast.error("Erro ao confirmar pagamento");
    }
  }

  function handleCloseModal() {
    setShowModal(false);
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
    }
  }

  function handleGoToHistory() {
    setShowModal(false);
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
    }
    navigate("/order-history");
  }

  async function updateStatusPayment() {
    let refreshTime = 0;

    while (refreshTime < 4) {
      refreshTime++;

      setTimeout(async () => {
        try {
          const endpoint = isNewSystem ? `/orders/${id}` : `/payment/${id}`;
          const paymentResult = await api.get(endpoint);

          const status = isNewSystem ? paymentResult.data.status : paymentResult.data.status;

          paymentStatus.forEach((statusItem) => {
            if (statusItem.status === status) {
              setResultStatus(statusItem);
              return;
            }
          });
        } catch (error) {
          console.error("Error updating status:", error);
        }
      }, 1000 * 10 * (refreshTime + 1)); //10 segundos
    }
  }

  async function handleGoBack() {
    try {
      console.log("[Payment] Restoring cart items from order:", orderData);

      if (!orderData || !orderData.items) {
        toast.error("Não foi possível restaurar o carrinho");
        navigate("/");
        return;
      }

      // Restaurar cada item no carrinho
      orderData.items.forEach(item => {
        if (item.plate) {
          // Adicionar propriedade 'value' ao plate para compatibilidade com useCart
          const plateWithValue = {
            ...item.plate,
            value: String(item.unit_price.toFixed(2)).replace(".", ",")
          };

          // Adicionar item ao carrinho com a quantidade original
          addItem(plateWithValue, item.quantity);
        }
      });

      navigate("/checkout");
    } catch (error) {
      console.error("[Payment] Error restoring cart:", error);
      toast.error("Erro ao restaurar carrinho");
      navigate("/");
    }
  }

  useEffect(() => {
    async function searchPayment() {
      console.log(`[Payment] Fetching order/payment with ID: ${id}`);

      try {
        // Tentar buscar do novo sistema de orders primeiro
        console.log(`[Payment] Trying new orders system: GET /orders/${id}`);
        const orderResult = await api.get(`/orders/${id}`);
        console.log("[Payment] Order found in new system:", orderResult.data);
        setIsNewSystem(true);

        // Salvar dados completos do pedido para restauração do carrinho
        setOrderData(orderResult.data);

        // Adaptar dados do order para o formato esperado
        if (orderResult.data.items && orderResult.data.items.length > 0) {
          const formattedItems = orderResult.data.items.map(item => {
            console.log("[Payment] Processing item:", item);
            return {
              quantity: item.quantity,
              plate: item.plate || { name: item.plate_name || "Item" },
              price: (item.unit_price || item.subtotal || 0).toFixed(2).replace(".", ",")
            };
          });
          setPlateRequest(formattedItems);
          console.log("[Payment] Items formatted successfully:", formattedItems);
        }

        setPrice(orderResult.data.total.toFixed(2).replace(".", ","));
        console.log("[Payment] Payment page setup complete - PIX:", !!orderResult.data.pix_qr_code);

        // Gerar PIX code (usar CNPJ fornecido)
        const pixData = {
          merchantName: "MARA RUBIA FIGUEREDO DOS SANTOS",
          merchantCity: "SAO PAULO",
          txid: `ORDER${id}`,
          amount: orderResult.data.total.toFixed(2),
        };

        // Simplificado: usar apenas o ID da order como "PIX code"
        setPixCode(`00020126580014br.gov.bcb.pix0136${id}52040000530398654${orderResult.data.total.toFixed(2)}5802BR5925MARA RUBIA FIGUEREDO6009SAO PAULO62070503***6304`);

        // Verificar status do order
        const statusMap = {
          'pending': 'processando',
          'confirmed': 'cozinha',
          'completed': 'finalizado',
          'cancelled': 'cancelado'
        };

        const mappedStatus = statusMap[orderResult.data.status] || orderResult.data.status;

        paymentStatus.forEach((status) => {
          if (mappedStatus === "pending" || mappedStatus === "processando") {
            setResultStatus("");
            return;
          }

          if (status.status === mappedStatus) {
            setResultStatus(status);
          }
        });

      } catch (error) {
        // Se falhar, tentar o sistema legacy
        console.log("[Payment] Order not found in new system, trying legacy system");
        console.log("[Payment] New system error:", error.response?.status, error.response?.data);

        try {
          console.log(`[Payment] Trying legacy payment system: GET /payment/${id}`);
          const paymentResult = await api.get(`/payment/${id}`);
          console.log("[Payment] Payment found in legacy system:", paymentResult.data);
          setIsNewSystem(false);
          setPlateRequest(JSON.parse(paymentResult.data.plates));
          setPrice(paymentResult.data.price);

          paymentStatus.forEach((status) => {
            if (paymentResult.data.status === "pendente") {
              setResultStatus("");
              return;
            }

            if (status.status === paymentResult.data.status) {
              setResultStatus(status);
              return;
            }
          });

          if (
            paymentResult.data.status !== "cancelado" &&
            paymentResult.data.status !== "pendente"
          ) {
            updateStatusPayment();
          }
        } catch (legacyError) {
          console.error("[Payment] ERROR: Order/Payment not found in either system!");
          console.error("[Payment] Legacy system error:", legacyError.response?.status, legacyError.response?.data);
          console.error("[Payment] Attempted ID:", id);

          const errorMsg = legacyError.response?.status === 404
            ? `Pedido #${id} não encontrado. Ele pode não ter sido criado corretamente.`
            : "Erro ao carregar dados do pedido";

          toast.error(errorMsg);

          setTimeout(() => {
            navigate("/order-history");
          }, 2000);
        }
      }
    }

    searchPayment();
  }, [id, navigate]);

  return (
    <Container>
      <Header />

      <div className="payment-container">
        <RequestList>
          <h2>Meus Pedidos</h2>

          <main>
            {plateRequest.length > 0 && plateRequest ? (
              plateRequest.map((item, index) => (
                <div className="plate-content" key={index}>
                  <img src={`${imageURL}/${String(item.plate.image)}`} alt="" />
                  <div className="plate-info">
                    <div>
                      <p>{`${item.quantity} x`}</p>
                      <p>{item.plate.name}</p>
                    </div>
                    <p className="price">{`R$ ${item.price}`}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="plate-content">
                <p>Nenhum Pedido Registrado</p>
              </div>
            )}
          </main>

          <h3>{`Total R$ ${price || "00,00"}`}</h3>
        </RequestList>

        <StatusPayment>
          <h2>Pagamento PIX</h2>

          {resultStatus.status ? (
            <div className="status-container">
              <resultStatus.image size={160} />
              <p>{resultStatus.message}</p>
            </div>
          ) : (
            <div className="pix-payment">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${pixCode || `${api.defaults.baseURL}/payment/qrcode/${id}`}`}
                alt="QR Code PIX"
                style={{
                  width: '250px',
                  height: '250px',
                  margin: '2rem auto',
                  display: 'block'
                }}
              />

              <div style={{
                padding: '1.5rem',
                background: '#1A2329',
                borderRadius: '0.8rem',
                margin: '2rem 0',
                fontSize: '1.4rem',
                wordBreak: 'break-all',
                textAlign: 'center'
              }}>
                <strong>Chave PIX:</strong><br/>
                MARA RUBIA FIGUEREDO DOS SANTOS<br/>
                <small style={{ opacity: 0.7 }}>CNPJ: 37.947.411/0001-86</small>
              </div>

              <div className="payment-actions">
                <Button
                  title="Voltar"
                  onClick={handleGoBack}
                />
                <Button
                  title="Concluir Pagamento"
                  onClick={handleConfirmPayment}
                />
              </div>
            </div>
          )}
        </StatusPayment>
      </div>
      <Footer />

      {showModal && (
        <PaymentConfirmationModal
          status={modalStatus}
          onClose={handleCloseModal}
          onGoToHistory={handleGoToHistory}
        />
      )}
    </Container>
  );
}
