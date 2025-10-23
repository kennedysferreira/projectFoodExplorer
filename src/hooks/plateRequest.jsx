import { useEffect } from "react";
import { api } from "../service/api";
import { createContext, useState } from "react";

export const PlateContext = createContext();

export const PlateProvider = ({ children }) => {
  const [plateRequest, setPlateRequest] = useState([]);
  const [showAllPlates, setShowAllPlates] = useState([]);

  const updateRequest = () => {
    setPlateRequest(JSON.parse(localStorage.getItem("pedidos")));
    return plateRequest;
  };

  const searchPlates = async () => {
    try {
      const response = await api.get("/plates");
      setShowAllPlates(response.data);
    } catch (error) {
      console.error("Erro ao carregar pratos:", error);
    }
  };

  useEffect(() => {
    searchPlates();

    // Listener para recarregar pratos após login
    const handleUserLogin = () => {
      searchPlates();
    };

    window.addEventListener('userLoggedIn', handleUserLogin);

    return () => {
      window.removeEventListener('userLoggedIn', handleUserLogin);
    };
  }, []);

  return (
    <PlateContext.Provider
      value={{ updateRequest, plateRequest, showAllPlates, searchPlates }}>
      {children}
    </PlateContext.Provider>
  );
};
