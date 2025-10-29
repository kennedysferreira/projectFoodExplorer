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
import { FaShoppingCart, FaPlus, FaTrash } from "react-icons/fa";

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

  const imageURL = `${api.defaults.baseURL}/files`;
  const deliveryFee = deliveryType === "delivery" ? 8.0 : 0;

  // Set default address if delivery
  useEffect(() => {
    if (deliveryType === "delivery" && addresses.length > 0 && !selectedAddress) {
      const defaultAddr = getDefaultAddress();
      if (defaultAddr) {
        setSelectedAddress(defaultAddr);
      }
    } else if (deliveryType === "pickup") {
      setSelectedAddress(null);
    }
  }, [deliveryType, addresses]);

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

      // Prepare delivery address data (objeto completo)
      const deliveryAddress = deliveryType === "delivery" && selectedAddress ? {
        id: Number(selectedAddress.id),
        street: selectedAddress.street,
        number: selectedAddress.number,
        complement: selectedAddress.complement || '',
        neighborhood: selectedAddress.neighborhood,
        city: selectedAddress.city,
        state: selectedAddress.state,
        zip_code: selectedAddress.zip_code,
        label: selectedAddress.label || ''
      } : null;

      // Prepare order data
      const orderData = {
        delivery_type: deliveryType,
        address_id: deliveryType === "delivery" ? Number(selectedAddress?.id) : null,
        delivery_address: deliveryAddress, // ← Adiciona objeto completo
        payment_method: paymentMethod,
        coupon_code: appliedCoupon?.code || null,
        loyalty_points_used: Number(pointsToUse) || 0,
        items: orderItems,
        subtotal: Number(subtotal.toFixed(2)),
        delivery_fee: Number(deliveryFee.toFixed(2)),
        discount: Number((loyaltyDiscount + couponDiscount).toFixed(2)),
        total: Number(total.toFixed(2)),
      };

      // Create order
      const order = await createOrder(orderData);

      // Validate order creation
      if (!order || !order.order_id) {
        console.error("Order creation failed - no order_id returned:", order);
        toast.error("Erro ao criar pedido. Nenhum ID retornado.");
        return;
      }

      console.log("Order created successfully:", {
        order_id: order.order_id,
        order_number: order.order_number,
        total: order.total,
        payment_method: paymentMethod
      });

      // Clear cart using hook
      clearCart();

      // Navigate based on payment method
      if (paymentMethod === "pix") {
        console.log(`Navigating to payment page with order_id: ${order.order_id}`);
        // Navigate to PIX payment page
        navigate(`/payment/${order.order_id}`);
      } else {
        // For cash/card on delivery, navigate to order confirmation
        toast.success("Pedido realizado com sucesso!");
        navigate(`/order-history`);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      console.error("Error response:", error.response?.data);
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
                      <p className="item-name">{`${item.quantity} x ${item.plate.name}`}</p>
                      {item.plate.description && (
                        <p className="item-description">{item.plate.description}</p>
                      )}
                      <p className="item-price">R$ {item.price}</p>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeCartItem(item)}
                      aria-label="Remover item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
            </CartSection>

            <CheckoutSection>
              <div className="checkout-block">
                <h3>Tipo de Entrega</h3>
                <div className="checkout-step">
                  <DeliveryTypeSelector
                    selected={deliveryType}
                    onSelect={setDeliveryType}
                    deliveryFee={deliveryFee}
                  />
                </div>
              </div>

              {deliveryType === "delivery" && (
                <div className="checkout-block">
                  <h3>Endereço de Entrega</h3>

                  <div className="checkout-step">
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
                            onClick={() => navigate("/profile")}
                          >
                            Ir para Meus Endereços
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="addresses-list">
                        {addresses.map((address) => (
                          <AddressCard
                            key={address.id}
                            variant="checkout"
                            address={address}
                            isSelected={selectedAddress?.id === address.id}
                            onSelect={() => setSelectedAddress(address)}
                            showActions={false}
                          />
                        ))}
                        <button
                          className="add-address-btn-inline"
                          onClick={() => setShowAddressModal(true)}
                        >
                          <FaPlus size={16} />
                          Adicionar novo endereço
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="checkout-block">
                <h3>Forma de Pagamento</h3>
                <div className="checkout-step">
                  <PaymentMethodSelector
                    selected={paymentMethod}
                    onSelect={setPaymentMethod}
                  />
                </div>
              </div>

              <div className="checkout-block">
                <h3>Cupom de Desconto</h3>
                <div className="checkout-step">
                  <CouponInput
                    orderValue={subtotal + deliveryFee}
                    onCouponApplied={handleCouponApplied}
                  />
                </div>
              </div>

              {balance >= 100 && (
                <div className="checkout-block">
                  <h3>Pontos de Fidelidade</h3>
                  <div className="checkout-step">
                    <LoyaltyPointsDisplay
                      onPointsUsed={handlePointsUsed}
                      showUseOption={true}
                    />
                  </div>
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
          <AddressForm
            onClose={() => setShowAddressModal(false)}
            onSuccess={() => setShowAddressModal(false)}
          />
        </ModalWrapper>
      )}
    </Container>
  );
}
