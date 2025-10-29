import { toast } from "react-toastify";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCheck, FaTimes, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, FiltersBar, HistoryTable } from "./style";

export function PaymentHistory() {
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [filterMethod, setFilterMethod] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function updateTimeToBrazil(timer) {
    if (!timer) return "N/A";

    let setData = new Date(timer);
    let day = setData.getDate();
    let month = setData.getMonth() + 1;
    let year = setData.getFullYear();
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

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  async function loadPaymentHistory() {
    try {
      setLoading(true);
      const response = await api.get("/payment/history");
      setPayments(response.data);
      setFilteredPayments(response.data);
    } catch (error) {
      console.error("Error loading payment history:", error);
      toast.error("Erro ao carregar histórico de pagamentos");
    } finally {
      setLoading(false);
    }
  }

  function formatPrice(price) {
    return Number(price).toFixed(2).replace(".", ",");
  }

  function getPaymentMethodLabel(method) {
    const labels = {
      credit: "Crédito",
      debit: "Débito",
      pix: "PIX"
    };
    return labels[method] || method;
  }

  function getStatusBadge(status, manuallyConfirmed) {
    if (status === "confirmed") {
      return (
        <span className="badge badge-confirmed">
          <FaCheck /> Confirmado {manuallyConfirmed && "(Manual)"}
        </span>
      );
    } else if (status === "rejected") {
      return (
        <span className="badge badge-rejected">
          <FaTimes /> Rejeitado
        </span>
      );
    } else {
      return <span className="badge badge-pending">Pendente</span>;
    }
  }

  useEffect(() => {
    let filtered = [...payments];

    if (filterMethod !== "all") {
      filtered = filtered.filter(p => p.payment_method === filterMethod);
    }

    if (filterStatus !== "all") {
      if (filterStatus === "confirmed") {
        filtered = filtered.filter(p => p.payment_status === "confirmed");
      } else if (filterStatus === "rejected") {
        filtered = filtered.filter(p => p.payment_status === "rejected");
      } else if (filterStatus === "manual") {
        filtered = filtered.filter(p => p.payment_manually_confirmed === true);
      }
    }

    setFilteredPayments(filtered);
  }, [filterMethod, filterStatus, payments]);

  useEffect(() => {
    loadPaymentHistory();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <div className="text-content">
          <button className="back-button" onClick={() => navigate(-1)}>
            <FaArrowLeft size={20} /> Voltar
          </button>
          <h2>Histórico de Pagamentos</h2>
          <p className="subtitle">
            Visualize todos os pagamentos confirmados e rejeitados
          </p>
        </div>

        <FiltersBar>
          <div className="filter-group">
            <FaFilter />
            <label>
              Método:
              <select
                value={filterMethod}
                onChange={(e) => setFilterMethod(e.target.value)}
              >
                <option value="all">Todos</option>
                <option value="pix">PIX</option>
                <option value="credit">Crédito</option>
                <option value="debit">Débito</option>
              </select>
            </label>

            <label>
              Status:
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">Todos</option>
                <option value="confirmed">Confirmados</option>
                <option value="rejected">Rejeitados</option>
                <option value="manual">Manuais</option>
              </select>
            </label>
          </div>

          <div className="results-count">
            {filteredPayments.length} resultado{filteredPayments.length !== 1 ? 's' : ''}
          </div>
        </FiltersBar>

        {loading ? (
          <div className="loading-state">Carregando...</div>
        ) : filteredPayments.length === 0 ? (
          <div className="empty-state">
            <p>Nenhum pagamento encontrado com os filtros selecionados</p>
          </div>
        ) : (
          <HistoryTable>
            <table>
              <thead>
                <tr>
                  <th>Pedido</th>
                  <th>Cliente</th>
                  <th>Método</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Confirmado por</th>
                  <th>Data Confirmação</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="order-id">
                      #{payment.id < 10 ? `0${payment.id}` : payment.id}
                    </td>
                    <td>{payment.user_name || "N/A"}</td>
                    <td>
                      <span className="payment-method">
                        {getPaymentMethodLabel(payment.payment_method)}
                      </span>
                    </td>
                    <td className="price">R$ {formatPrice(payment.total)}</td>
                    <td>
                      {getStatusBadge(
                        payment.payment_status,
                        payment.payment_manually_confirmed
                      )}
                    </td>
                    <td>{payment.confirmed_by_name || "Sistema"}</td>
                    <td className="date">
                      {updateTimeToBrazil(payment.confirmed_at)}
                    </td>
                    <td className="notes">
                      {payment.payment_notes || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </HistoryTable>
        )}
      </main>
      <Footer />
    </Container>
  );
}
