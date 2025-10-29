import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy loading de páginas para melhor performance
const Home = lazy(() => import("../pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("../pages/About").then(m => ({ default: m.About })));
const Profile = lazy(() => import("../pages/Profile").then(m => ({ default: m.Profile })));
const Payment = lazy(() => import("../pages/Payment").then(m => ({ default: m.Payment })));
const Favorite = lazy(() => import("../pages/Favorite").then(m => ({ default: m.Favorite })));
const PlateView = lazy(() => import("../pages/PlateView").then(m => ({ default: m.PlateView })));
const OrderHistory = lazy(() => import("../pages/OrderHistory").then(m => ({ default: m.OrderHistory })));
const ConfirmPayment = lazy(() => import("../pages/ConfirmPayment").then(m => ({ default: m.ConfirmPayment })));
const Checkout = lazy(() => import("../pages/Checkout").then(m => ({ default: m.Checkout })));

export function UserRoutes() {
  return (
    <Suspense fallback={<div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#000',
      color: '#fff'
    }}>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plateview/:id" element={<PlateView />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/payment/qrcode/:id" element={<ConfirmPayment />} />
        <Route path="/cart" element={<Navigate to="/checkout" replace />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
