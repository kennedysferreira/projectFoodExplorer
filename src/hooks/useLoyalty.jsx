import { api } from "../service/api";
import { toast } from "react-toastify";
import { createContext, useContext, useState, useEffect } from "react";

export const LoyaltyContext = createContext({});

function LoyaltyProvider({ children }) {
  const [loyaltyData, setLoyaltyData] = useState({
    balance: 0,
    total_earned: 0,
    total_used: 0,
  });
  const [loading, setLoading] = useState(false);

  async function getBalance() {
    try {
      setLoading(true);
      const response = await api.get("/loyalty");
      setLoyaltyData(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível carregar os pontos de fidelidade.");
      }
      return { balance: 0, total_earned: 0, total_used: 0 };
    } finally {
      setLoading(false);
    }
  }

  async function usePoints(points) {
    try {
      setLoading(true);
      const response = await api.post("/loyalty/use", { points });
      toast.dark("Pontos utilizados com sucesso!");
      await getBalance(); // Recarrega o saldo
      return response.data;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível utilizar os pontos.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  function calculateDiscount() {
    // 100 pontos = R$ 1,00
    return (loyaltyData.balance / 100).toFixed(2);
  }

  function canUsePoints(minPoints = 100) {
    return loyaltyData.balance >= minPoints;
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    if (user) {
      getBalance();
    }
  }, []);

  return (
    <LoyaltyContext.Provider
      value={{
        balance: loyaltyData.balance,
        totalEarned: loyaltyData.total_earned,
        totalUsed: loyaltyData.total_used,
        loading,
        getBalance,
        usePoints,
        calculateDiscount,
        canUsePoints,
      }}>
      {children}
    </LoyaltyContext.Provider>
  );
}

function useLoyalty() {
  const context = useContext(LoyaltyContext);
  return context;
}

export { LoyaltyProvider, useLoyalty };
