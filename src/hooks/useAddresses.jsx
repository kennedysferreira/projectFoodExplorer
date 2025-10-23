import { api } from "../service/api";
import { toast } from "react-toastify";
import { createContext, useContext, useState, useEffect } from "react";

export const AddressContext = createContext({});

function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAddresses() {
    try {
      setLoading(true);
      const response = await api.get("/addresses");
      setAddresses(response.data);
      return response.data;
    } catch (error) {
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

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    if (user) {
      getAddresses();
    }
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
