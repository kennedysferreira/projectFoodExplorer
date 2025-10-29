import { useState } from "react";
import { Container } from "./style";
import { Input } from "../Input";
import { Button } from "../Button";
import { useCoupons } from "../../hooks/useCoupons";
import { FaTicketAlt, FaTimes } from "react-icons/fa";

export function CouponInput({ orderValue, onCouponApplied }) {
  const [couponCode, setCouponCode] = useState("");
  const { validateCoupon, appliedCoupon, removeCoupon, calculateDiscount, formatDiscount, loading } = useCoupons();

  async function handleApplyCoupon() {
    if (!couponCode.trim()) {
      return;
    }

    try {
      const coupon = await validateCoupon(couponCode, orderValue);
      if (onCouponApplied) {
        onCouponApplied(coupon);
      }
    } catch (error) {
      // Erro já tratado no hook com toast
    }
  }

  function handleRemoveCoupon() {
    setCouponCode("");
    removeCoupon();
    if (onCouponApplied) {
      onCouponApplied(null);
    }
  }

  return (
    <Container>
      {!appliedCoupon ? (
        <div className="coupon-input-group">
          <Input
            placeholder="Digite o código do cupom"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
            icon={FaTicketAlt}
          />
          <Button
            title="Aplicar"
            onClick={handleApplyCoupon}
            disabled={loading || !couponCode.trim()}
          />
        </div>
      ) : (
        <div className="coupon-applied">
          <div className="coupon-info">
            <FaTicketAlt size={24} />
            <div>
              <strong>{appliedCoupon.code}</strong>
              <p>{appliedCoupon.description || "Cupom aplicado"}</p>
              <span className="discount">
                Desconto: {formatDiscount()}
                {appliedCoupon.discount_type === "percentage"
                  ? ` (-R$ ${calculateDiscount(orderValue).toFixed(2)})`
                  : ""}
              </span>
            </div>
          </div>
          <button className="remove-button" onClick={handleRemoveCoupon}>
            <FaTimes size={20} />
          </button>
        </div>
      )}
    </Container>
  );
}
