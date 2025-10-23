import { api } from "../service/api";
import { toast } from "react-toastify";
import { createContext, useContext, useState, useEffect } from "react";

export const OrderContext = createContext({});

function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getOrders() {
    try {
      setLoading(true);
      const response = await api.get("/orders");
      setOrders(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível carregar os pedidos.");
      }
      return [];
    } finally {
      setLoading(false);
    }
  }

  async function getOrder(id) {
    try {
      setLoading(true);
      const response = await api.get(`/orders/${id}`);
      setCurrentOrder(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível carregar o pedido.");
      }
      return null;
    } finally {
      setLoading(false);
    }
  }

  async function createOrder(orderData) {
    try {
      setLoading(true);
      const response = await api.post("/orders", orderData);

      toast.dark(response.data.message || "Pedido criado com sucesso!");

      // Limpar carrinho do localStorage após pedido bem-sucedido
      localStorage.removeItem("pedidos");

      // Atualizar lista de pedidos
      await getOrders();

      return response.data;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível criar o pedido.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function updateOrderStatus(id, status) {
    try {
      setLoading(true);
      await api.patch(`/orders/${id}`, { status });
      toast.dark("Status do pedido atualizado!");
      await getOrders(); // Recarrega a lista
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível atualizar o status.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function cancelOrder(id) {
    try {
      setLoading(true);
      await api.delete(`/orders/${id}`);
      toast.dark("Pedido cancelado com sucesso!");
      await getOrders(); // Recarrega a lista
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível cancelar o pedido.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function confirmPayment(id) {
    try {
      setLoading(true);
      const response = await api.patch(`/orders/${id}/confirm-payment`);
      toast.dark(response.data.message || "Pagamento confirmado!");
      await getOrders(); // Recarrega a lista
      return response.data;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível confirmar o pagamento.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function getOrdersByPaymentStatus(status) {
    try {
      setLoading(true);
      const response = await api.get(`/orders/payment-status/${status}`);
      return response.data;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível carregar os pedidos.");
      }
      return [];
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    if (user) {
      getOrders();
    }
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orders,
        currentOrder,
        loading,
        getOrders,
        getOrder,
        createOrder,
        updateOrderStatus,
        cancelOrder,
        confirmPayment,
        getOrdersByPaymentStatus,
      }}>
      {children}
    </OrderContext.Provider>
  );
}

function useOrders() {
  const context = useContext(OrderContext);
  return context;
}

export { OrderProvider, useOrders };
