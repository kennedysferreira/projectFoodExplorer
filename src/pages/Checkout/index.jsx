import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/useCart";
import { useAddresses } from "../../hooks/useAddresses";
import { useOrders } from "../../hooks/useOrders";
import { useLoyalty } from "../../hooks/useLoyalty";
import { useCoupons } from "../../hooks/useCoupons";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { DeliveryTypeSelector } from "../../components/DeliveryTypeSelector";
import { AddressCard } from "../../components/AddressCard";
import { PaymentMethodSelector } from "../../components/PaymentMethodSelector";
import { CouponInput } from "../../components/CouponInput";
import { LoyaltyPointsDisplay } from "../../components/LoyaltyPointsDisplay";
import { ModalWrapper } from "../../components/ModalWrapper";
import { AddressForm } from "../../components/AddressForm";
import {
  Container,
  CheckoutContent,
  CartSection,
  CheckoutSection,
  OrderSummary,
  EmptyCart,
} from "./style";
import { FaShoppingCart, FaPlus } from "react-icons/fa";

export function Checkout() {
  const [deliveryType, setDeliveryType] = useState("delivery");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("pix");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [pointsToUse, setPointsToUse] = useState(0);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartItems, removeItem, clearCart, getSubtotal } = useCart();
  const { addresses, getDefaultAddress } = useAddresses();
  const { createOrder } = useOrders();
  const { balance, usePoints, calculateDiscount } = useLoyalty();
  const { appliedCoupon: coupon, calculateDiscount: calculateCouponDiscount } = useCoupons();

  const imageURL = `${api.defaults.baseURL}/files/`;
  const deliveryFee = deliveryType === "delivery" ? 8.0 : 0;

  // Set default address if delivery
  useEffect(() => {
    if (deliveryType === "delivery") {
      const defaultAddr = getDefaultAddress();
      setSelectedAddress(defaultAddr);
    }
  }, [deliveryType, getDefaultAddress]);

  // Calculate subtotal using the hook
  const subtotal = getSubtotal();

  // Calculate loyalty discount
  const loyaltyDiscount = pointsToUse > 0 ? pointsToUse / 100 : 0;

  // Calculate coupon discount
  const couponDiscount = appliedCoupon
    ? calculateCouponDiscount(subtotal + deliveryFee)
    : 0;

  // Calculate total
  const total = Math.max(
    0,
    subtotal + deliveryFee - loyaltyDiscount - couponDiscount
  );

  function removeCartItem(item) {
    removeItem(item.plate.id);
  }

  function handleCouponApplied(coupon) {
    setAppliedCoupon(coupon);
  }

  function handlePointsUsed(points) {
    setPointsToUse(points);
  }

  async function handlePlaceOrder() {
    // Validation
    if (cartItems.length === 0) {
      toast.error("Seu carrinho está vazio");
      return;
    }

    if (deliveryType === "delivery" && !selectedAddress) {
      toast.error("Selecione um endereço de entrega");
      return;
    }

    if (!paymentMethod) {
      toast.error("Selecione uma forma de pagamento");
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare order items
      const orderItems = cartItems.map((item) => ({
        plate_id: item.plate.id,
        quantity: item.quantity,
        price: Number(item.price.replace(",", ".")),
      }));

      // Prepare order data
      const orderData = {
        delivery_type: deliveryType,
        address_id: deliveryType === "delivery" ? selectedAddress?.id : null,
        payment_method: paymentMethod,
        coupon_code: appliedCoupon?.code || null,
        loyalty_points_used: pointsToUse,
        items: orderItems,
        subtotal,
        delivery_fee: deliveryFee,
        discount: loyaltyDiscount + couponDiscount,
        total,
      };

      // Create order
      const order = await createOrder(orderData);

      // Clear cart using hook
      clearCart();

      // Navigate based on payment method
      if (paymentMethod === "pix") {
        // Navigate to PIX payment page
        navigate(`/payment/${order.id}`);
      } else {
        // For cash/card on delivery, navigate to order confirmation
        toast.success("Pedido realizado com sucesso!");
        navigate(`/order-history`);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Erro ao criar pedido. Tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <h1>Finalizar Pedido</h1>

        {cartItems.length === 0 ? (
          <EmptyCart>
            <FaShoppingCart size={80} />
            <h2>Seu carrinho está vazio</h2>
            <p>Adicione itens ao carrinho para continuar</p>
            <Button title="Ver Cardápio" onClick={() => navigate("/")} />
          </EmptyCart>
        ) : (
          <CheckoutContent>
            <CartSection>
              <div className="section-header">
                <h2>Itens do Pedido</h2>
                <button className="clear-btn" onClick={clearCart}>
                  Limpar carrinho
                </button>
              </div>

              <div className="cart-items">
                {cartItems.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <img
                      src={`${imageURL}/${String(item.plate.image)}`}
                      alt={item.plate.name}
                    />
                    <div className="item-info">
                      <div className="item-header">
                        <p className="item-name">{`${item.quantity} x ${item.plate.name}`}</p>
                        <p className="item-price">R$ {item.price}</p>
                      </div>
                      <div className="item-tags">
                        {item.plate.ingredients.map((ingredient, idx) => (
                          <Tag title={ingredient.name} key={idx} />
                        ))}
                      </div>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeCartItem(item)}
                    >
                      Remover
                    </button>
                  </div>
                ))}
              </div>
            </CartSection>

            <CheckoutSection>
              <div className="checkout-step">
                <h3>Tipo de Entrega</h3>
                <DeliveryTypeSelector
                  selected={deliveryType}
                  onSelect={setDeliveryType}
                  deliveryFee={deliveryFee}
                />
              </div>

              {deliveryType === "delivery" && (
                <div className="checkout-step">
                  <div className="step-header">
                    <h3>Endereço de Entrega</h3>
                    <button
                      className="add-address-btn"
                      onClick={() => setShowAddressModal(true)}
                    >
                      <FaPlus size={12} /> Novo endereço
                    </button>
                  </div>

                  {addresses.length === 0 ? (
                    <div className="empty-addresses">
                      <p>Você ainda não tem endereços cadastrados</p>
                      <p className="help-text">
                        Cadastre um endereço para poder receber entregas
                      </p>
                      <div className="address-actions">
                        <Button
                          title="Cadastrar aqui"
                          onClick={() => setShowAddressModal(true)}
                        />
                        <button
                          className="link-btn"
                          onClick={() => navigate("/addresses")}
                        >
                          Ir para Meus Endereços
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="addresses-grid">
                      {addresses.map((address) => (
                        <div
                          key={address.id}
                          className={`address-option ${
                            selectedAddress?.id === address.id ? "selected" : ""
                          }`}
                          onClick={() => setSelectedAddress(address)}
                        >
                          <AddressCard address={address} showActions={false} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="checkout-step">
                <h3>Forma de Pagamento</h3>
                <PaymentMethodSelector
                  selected={paymentMethod}
                  onSelect={setPaymentMethod}
                />
              </div>

              <div className="checkout-step">
                <CouponInput
                  orderValue={subtotal + deliveryFee}
                  onCouponApplied={handleCouponApplied}
                />
              </div>

              {balance >= 100 && (
                <div className="checkout-step">
                  <LoyaltyPointsDisplay
                    onPointsUsed={handlePointsUsed}
                    showUseOption={true}
                  />
                </div>
              )}

              <OrderSummary>
                <h3>Resumo do Pedido</h3>

                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                </div>

                {deliveryType === "delivery" && (
                  <div className="summary-line">
                    <span>Taxa de entrega</span>
                    <span>R$ {deliveryFee.toFixed(2).replace(".", ",")}</span>
                  </div>
                )}

                {loyaltyDiscount > 0 && (
                  <div className="summary-line discount">
                    <span>Desconto - Pontos de Fidelidade</span>
                    <span>- R$ {loyaltyDiscount.toFixed(2).replace(".", ",")}</span>
                  </div>
                )}

                {couponDiscount > 0 && (
                  <div className="summary-line discount">
                    <span>Desconto - Cupom ({appliedCoupon?.code})</span>
                    <span>- R$ {couponDiscount.toFixed(2).replace(".", ",")}</span>
                  </div>
                )}

                <div className="summary-total">
                  <strong>Total</strong>
                  <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
                </div>

                <Button
                  title={isSubmitting ? "Processando..." : "Finalizar Pedido"}
                  onClick={handlePlaceOrder}
                  disabled={isSubmitting}
                />

                <button className="back-btn" onClick={() => navigate("/")}>
                  Voltar ao cardápio
                </button>
              </OrderSummary>
            </CheckoutSection>
          </CheckoutContent>
        )}
      </main>

      <Footer />

      {showAddressModal && (
        <ModalWrapper onClose={() => setShowAddressModal(false)}>
          <AddressForm onSuccess={() => setShowAddressModal(false)} />
        </ModalWrapper>
      )}
    </Container>
  );
}
