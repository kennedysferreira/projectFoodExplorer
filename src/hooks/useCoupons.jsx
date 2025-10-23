import { api } from "../service/api";
import { toast } from "react-toastify";
import { createContext, useContext, useState, useEffect } from "react";

export const CouponContext = createContext({});

function CouponProvider({ children }) {
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getCoupons() {
    try {
      setLoading(true);
      const response = await api.get("/coupons");
      setAvailableCoupons(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível carregar os cupons.");
      }
      return [];
    } finally {
      setLoading(false);
    }
  }

  async function validateCoupon(code, orderValue) {
    try {
      setLoading(true);
      const response = await api.post("/coupons/validate", {
        code,
        order_value: orderValue,
      });

      const coupon = response.data;
      setAppliedCoupon(coupon);
      toast.dark("Cupom aplicado com sucesso!");
      return coupon;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível validar o cupom.");
      }
      setAppliedCoupon(null);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  function calculateDiscount(orderValue) {
    if (!appliedCoupon) return 0;

    let discount = 0;

    if (appliedCoupon.discount_type === "percentage") {
      discount = (orderValue * parseFloat(appliedCoupon.discount_value)) / 100;
    } else {
      discount = parseFloat(appliedCoupon.discount_value);
    }

    // Desconto não pode ser maior que o subtotal
    if (discount > orderValue) {
      discount = orderValue;
    }

    return discount;
  }

  function removeCoupon() {
    setAppliedCoupon(null);
    toast.dark("Cupom removido.");
  }

  function formatDiscount() {
    if (!appliedCoupon) return "";

    if (appliedCoupon.discount_type === "percentage") {
      return `${appliedCoupon.discount_value}%`;
    } else {
      return `R$ ${parseFloat(appliedCoupon.discount_value).toFixed(2)}`;
    }
  }

  async function createCoupon(couponData) {
    try {
      setLoading(true);
      const response = await api.post("/coupons", couponData);
      toast.dark("Cupom criado com sucesso!");
      await getCoupons(); // Recarrega a lista
      return response.data;
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível criar o cupom.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function updateCoupon(id, couponData) {
    try {
      setLoading(true);
      await api.put(`/coupons/${id}`, couponData);
      toast.dark("Cupom atualizado com sucesso!");
      await getCoupons(); // Recarrega a lista
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível atualizar o cupom.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function deleteCoupon(id) {
    try {
      setLoading(true);
      await api.delete(`/coupons/${id}`);
      toast.dark("Cupom deletado com sucesso!");
      await getCoupons(); // Recarrega a lista
    } catch (error) {
      if (error.response) {
        toast.dark(error.response.data.message);
      } else {
        toast.dark("Não foi possível deletar o cupom.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    if (user) {
      getCoupons();
    }
  }, []);

  return (
    <CouponContext.Provider
      value={{
        availableCoupons,
        appliedCoupon,
        loading,
        getCoupons,
        validateCoupon,
        calculateDiscount,
        removeCoupon,
        formatDiscount,
        createCoupon,
        updateCoupon,
        deleteCoupon,
      }}>
      {children}
    </CouponContext.Provider>
  );
}

function useCoupons() {
  const context = useContext(CouponContext);
  return context;
}

export { CouponProvider, useCoupons };
