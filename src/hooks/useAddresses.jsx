import { api } from "../service/api";
import { toast } from "react-toastify";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth";

export const AddressContext = createContext({});

function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  async function getAddresses() {
    try {
      setLoading(true);
      console.log("[AddressProvider] Fetching addresses...");
      const response = await api.get("/addresses");
      console.log("[AddressProvider] Addresses loaded:", response.data.length);
      setAddresses(response.data);
      return response.data;
    } catch (error) {
      console.error("[AddressProvider] Failed to load addresses:", error.response?.status, error.response?.data);
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível carregar os endereços.");
      }
      return [];
    } finally {
      setLoading(false);
    }
  }

  async function createAddress(addressData) {
    try {
      setLoading(true);
      const response = await api.post("/addresses", addressData);
      toast.dark("Endereço adicionado com sucesso!");
      await getAddresses(); // Recarrega a lista
      return response.data;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível adicionar o endereço.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function updateAddress(id, addressData) {
    try {
      setLoading(true);
      await api.put(`/addresses/${id}`, addressData);
      toast.dark("Endereço atualizado com sucesso!");
      await getAddresses(); // Recarrega a lista
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível atualizar o endereço.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function deleteAddress(id) {
    try {
      setLoading(true);
      await api.delete(`/addresses/${id}`);
      toast.dark("Endereço removido com sucesso!");
      await getAddresses(); // Recarrega a lista
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível remover o endereço.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function setDefaultAddress(id) {
    try {
      setLoading(true);
      await api.patch(`/addresses/${id}/default`);
      toast.dark("Endereço padrão atualizado!");
      await getAddresses(); // Recarrega a lista
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível definir endereço padrão.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  function getDefaultAddress() {
    return addresses.find(addr => addr.is_default) || addresses[0] || null;
  }

  // Carregar endereços quando usuário estiver autenticado
  useEffect(() => {
    if (user) {
      console.log("[AddressProvider] User authenticated, loading addresses");
      getAddresses();
    }
  }, [user]);

  // Escutar evento de login para recarregar endereços
  useEffect(() => {
    const handleUserLogin = () => {
      console.log("[AddressProvider] User logged in event, reloading addresses");
      getAddresses();
    };

    window.addEventListener('userLoggedIn', handleUserLogin);

    return () => {
      window.removeEventListener('userLoggedIn', handleUserLogin);
    };
  }, []);

  return (
    <AddressContext.Provider
      value={{
        addresses,
        loading,
        getAddresses,
        createAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
        getDefaultAddress,
      }}>
      {children}
    </AddressContext.Provider>
  );
}

function useAddresses() {
  const context = useContext(AddressContext);
  return context;
}

export { AddressProvider, useAddresses };
